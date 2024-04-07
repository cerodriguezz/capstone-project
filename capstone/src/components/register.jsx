import { useEffect, useState } from "react";
import { FetchUsers } from "../api";
import { useNavigate } from "react-router-dom";

export default function Register () {
    const [users, setUsers] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        async function fetchdata () {
            const data = await FetchUsers();
            setUsers(data);
        }
            fetchdata();
    }, []);
    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>
                Email: {''}
                <input value={email} onChange={(e) => SetEmail(e.target.value)} />
            </label>
            <label>
                Username: {''}
                <input value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <label>
                Firstname: {''}
                <input value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            </label>
            <label>
                Lastname: {''}
                <input value={lastname} onChange={(e) => setLastnamw(e.target.value)} />
            </label>
            <button>Register!</button>
            </form>
        </div>
    )
}
