import { useEffect,useState } from "react";
import { FetchProducts } from "../api";
import { Link } from "react-router-dom";


export default function Home () {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchdata () {
            const data = await FetchProducts();
            setProducts(data);
        }
            fetchdata();

    }, []);

    return (
        <div>
            <h1>Vinyls</h1>
            
                {
                products.map((product) => {
                    return(
                        <ul key={product.id}>
                        <li>{product.title}</li>
                        <li>{product.price}</li>
                        <li>{product.image}</li>
                    </ul>
                    )
                }
                )}
            
        </div>
    )
}