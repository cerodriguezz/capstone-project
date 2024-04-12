import { useEffect,useState } from "react";
import { FetchProducts, Cart } from "../api";
import { useNavigate } from "react-router-dom";




export default function Home () {
    const [products, setProducts] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        async function fetchdata () {
            const data = await FetchProducts();
            setProducts(data);
        }
            fetchdata();

    }, []);



    return (
        <div>
            <h1>Shop!</h1>
            
                {
                products.map((product) => {
                    return(
                        <ul key={product.id}>
                        <li>{product.title}</li>
                        <li>{product.price}</li>
                        <li><img src={product.image} alt={product.image} /> </li>
                        <li><button onClick={()=> Navigate(`products/${product.id}`)}>Details</button></li>

                    </ul>
                    )
                }
                )}
            
        </div>
    )
}