import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, updateUsername } from '../store/features/userSlice';



const AddUser = () => {
    const state = useSelector((state) => state.users.value)
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");


    const dispatch = useDispatch()
    const handleAddUser = () => {
        dispatch(addUser({ id: state[state.length - 1].id + 1, name, username }))
    }

    return (
        <>
            <div className="addUser">
                <input type="text" placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Username...' onChange={(e) => setUsername(e.target.value)} />
                <button onClick={handleAddUser}>Add User</button>

            </div>
            <div className="displayUsers">
                {state.map((user, index) =>
                (
                    <div key={index}>
                        <h1 >{user.name}</h1>
                        <h1 >{user.username}</h1>
                        <input type="text" placeholder="New Username..." onChange={(e) => setNewUsername(e.target.value)} />
                        <button
                            onClick={() => dispatch(updateUsername({ id: user.id, username: newUsername }))}
                        >Update Username
                        </button>

                        <button
                            onClick={() => dispatch(deleteUser({ id: user.id }))}
                        >Delete User
                        </button>
                    </div>

                )
                )}
            </div>
        </>

    )
}

export default AddUser