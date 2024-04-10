import { useEffect, useState } from "react";
import { Cart, CreateUser } from "../api";

export default function CreateLogin(){
    const [formData, setFormData] = useState({
        address:{
            city:'',
            street:'',
            number:'',
            zipcode:'', 
        },
        phone:''
    });


async function CreateUser(data) {
    return fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
        },
        body: JSON.stringify(data)
    });
}

const handleSubmit = async (event) => {
    event.preventDefault();

    try{
        const response = await CreateUser(formData);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:',error);
    }
}

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

return(
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="city">City:</label>
            <input 
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            />
        </div>
        <div>
            <label htmlFor="street">Street:</label>
            <input 
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            required
            />
        </div>
        <div>
            <label htmlFor="zipcode">Zipcode:</label>
            <input 
            type="integer"
            id="zipcode"
            name="zipcode"
            value={formData.zipcode}
            onChange={handleInputChange}
            required
            />
        </div>
        <div>
            <label htmlFor="phone">Phone:</label>
            <input 
            type="integer"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            />
        </div>
        <button type="submit">Checkout</button>
    </form>
)

}