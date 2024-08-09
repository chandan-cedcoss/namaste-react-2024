import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { addItems, clearcart } from "../utils/cartSlice";

const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const { loggedInUser } = useContext(UserContext)
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems)

    const clearCart = () => {
        dispatch(clearCart())
    }

    const handleItems = () => {
        dispatch(addItems("pizza"))
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li>{loggedInUser}</li>
                    <li>cart {cartItems}</li>
                    <button onClick={handleItems}>add+</button>
                    <button onClick={clearCart}>clear Cart</button>
                    <button className="action-btnF" onClick={() => 
                        { btnName === 'Login' ? setBtnName('logout') : setBtnName('Login'); }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;

