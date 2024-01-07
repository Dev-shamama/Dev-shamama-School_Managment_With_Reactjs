import { Link } from "react-router-dom";
import { NavbarComponents } from "../Styles/style-navbar-component/Navbar.styled";
import { Button } from "../Styles/style-button-component/Button";
import {
  IoClose,
  IoMenu,
} from "react-icons/io5";
import { useRef, useState } from "react";
const Navbar = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);
  const ref = useRef();

  const OpenMenu = () => {
    ref.current.classList.toggle("active");
    if (burgerIcon === true) {
      setBurgerIcon(false);
    } else {
      setBurgerIcon(true);
    }
  };

  return (
    <NavbarComponents ref={ref}>
      <div className="logo">
        <Link to="/">
          <h1>iSchool</h1>
        </Link>
        <div className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Program</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </div>
      </div>
      <div className="account">
        <Link to="/login">
          <Button $primary>Log in</Button>
        </Link>
      </div>

      <div className="burger" onClick={OpenMenu}>
        {burgerIcon !== true ? <IoMenu /> : <IoClose />}
      </div>
    </NavbarComponents>
  );
};

export default Navbar;
