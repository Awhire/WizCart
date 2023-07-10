import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo-wiz.png";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { showToggle } from "../../features/Modal/modalSlice";


const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { headsets } = useSelector((state) => state.head);
  

  // const [nav, setNav] = useState(false);

  const dispatch = useDispatch();
  const showCart = (e) => {
    dispatch(showToggle())
    
  }

  return (
    <nav className="nav-tab">
      
        <img src={logo} alt="logo" className="logo" />
      
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li onClick={showCart} className="name">
          cart<span>{cartItems.length + headsets.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
