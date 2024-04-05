import { Link } from "react-router-dom";

export default function Navigation () {
    return(
        <div>
            <Link to ='/'>home</Link>
            <Link to ='/register'>Register</Link>
            <Link to ='/login'>Login</Link>
            <Link to ='/cart'>Cart</Link>
        </div>
    )
}