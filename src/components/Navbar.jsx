import { NavLink } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

export const Navbar = () => {
  const getActiveStyle = ({ isActive }) => ({
    fontWeight: "600",
    color: "black",
    fontSize: "20px",
    border:isActive ? "3px solid #ec0aec" : "",
    padding:"5px",
    borderRadius:"6px"
  });

  const { numberOfItems } = useCartContext();
  return (
    <>
      <div className="navbar">
        <ul className="navTitle">
          <li>BiteCart</li>
        </ul>
        <ul className="navLinks">
          <li className="navLink">
            {" "}
            <NavLink to="/" style={getActiveStyle}>
              Home{" "}
            </NavLink>
          </li>
          <li className="navLink">
            {" "}
            <NavLink to="/menu" style={getActiveStyle}>
              Menu{" "}
            </NavLink>
          </li>
          <li className="navLink">
            {" "}
            <NavLink to="/cart" style={getActiveStyle}>
              {" "}
              Cart ({numberOfItems})
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
