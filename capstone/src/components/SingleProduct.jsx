import { FetchSingleProduct } from "../api";
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

            // console.log(data);

        }
            fetchdata();
    }, [id]);

    return (
        <div>
            {product&&(
                <ul>
                    <li>Id: {product.id}</li>
                    <li>Price: {product.price}</li>
                    <li>Description: {product.description}</li>
                    <li><img src={product.image} alt={product.image}/></li>
                </ul>
            )}
        </div>
    )

}

