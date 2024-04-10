import { useState } from "react";
import { CreateUser } from "../api";
import { json } from "react-router";


export default function Register () {
    // State to hold form data
    const [formData, setFormData] = useState({
      email: '',
      username: '',
      password: '',
      name: {
        firstname: '',
        lastname: ''
      }
    });
    // Function to handle form submission
    async function CreateUser(data) {
        return fetch('https://fakestoreapi.com/users',{
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Make API call
      try {
        const response = await CreateUser(formData);
        const data = await response.json();
        console.log(data); // Response from API
      } catch (error) {
        console.error('Error:', error);
      }
    };
    // Function to handle input changes
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
      } else {
        setFormData({ ...formData, [name]: value });
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
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
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="name.firstname"
            value={formData.name.firstname}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="name.lastname"
            value={formData.name.lastname}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
}
