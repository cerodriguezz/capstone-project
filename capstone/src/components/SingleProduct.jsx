import { FetchSingleProduct, Cart, User} from "../api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct () {
    const [product, setProduct] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        async function fetchdata () {
            const data = await FetchSingleProduct(id);
            console.log(data);
            setProduct(data);


        }
            fetchdata();
    }, []);

    async function handleSubmit(){
        async function getUser(){
            const me = await User(token);
            return me;
            }
            const me =await getUser(id);
            console.log(me);
          fetch(`https://fakestoreapi.com/carts/user/${id}`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
              qty: 1
            })
          }).then(response => response.json())
            .then(result => {
              alert('You successfully added product to your cart: '+ product.name);
            })
            .catch(console.error);

    } 

console.log(User.id)


        return(
        <div>
            {product&&(
                <ul>
                    <li>Id: {product.id}</li>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.description}</li>
                    <li><img src={product.image} alt={product.image}/></li>
                    {/* <li><button onClick={() => handleSubmit(`${SingleProduct.id}/${Cart.id}/${User.id}`)}>Add to cart</button></li> */}
                    <li><button onClick={handleSubmit}>add to cart</button></li>
                </ul>
            )}
        </div>
        )

}



