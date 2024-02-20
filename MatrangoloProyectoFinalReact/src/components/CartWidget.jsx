import basket from '../assets/basket.svg';
import { useContext } from 'react';
import { CartContext } from "./context/CartContext";
import {Link} from "react-router-dom";


const CartWidget = () => {
    const {CantTotalProductos} = useContext(CartContext);

    return (
        CantTotalProductos() > 0 ? <Link to={"/cart"} className='btn btn-warning position-relative'>
            <img src={basket} alt="basket-widget" style={{ width: '30px', height: '30px' }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black" >{CantTotalProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;

