import { useState } from "react";
import { CreateLogin } from "../api";

export default function Login() {
    const[formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await CreateLogin(formData);
            const data = await response.json();
            console.log(data);
        }catch(error) {
            console.error('Error:', error);
        }
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name.startsWith('name.')) {
            const fieldName = name.split('.')[1];
            setFormData({
                ...formData,
                name: {
                    ...formData.name,
                    [fieldName]: value
                }
            });
        } else{
            setFormData({...formData,[name]: value });
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                type="username"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );

}