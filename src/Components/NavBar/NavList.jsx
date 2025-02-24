import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import Dropdownlist from "../Dropdown/Dropdownlist";

function NavList(props) {
  const [dropdownlist, setDropdown] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <ul className={props.navClass}>
        <li>
          <NavLink to="/" className={props.liClass}>
            Home
          </NavLink>
        </li>
        <Dropdownlist liClass={props.liClass} title="Menu" />
        <Dropdownlist liClass={props.liClass} title="Services" />
        <li>
          <NavLink to="/offers" className={props.liClass}>
            Offers
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default NavList;
