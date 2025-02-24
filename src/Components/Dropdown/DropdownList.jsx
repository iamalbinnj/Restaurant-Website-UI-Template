import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";

function Dropdownlist(props) {
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
      <li className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdown(!dropdownlist)}
          className={`${props.liClass} flex items-center gap-1`}
        >
          {props.title}
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {dropdownlist && (
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
            <NavLink to="/menu" className="block px-4 py-2 hover:text-primary">
              Main Menu
            </NavLink>
            <NavLink
              to="/menu/breakfast"
              className="block px-4 py-2 hover:text-primary"
            >
              Breakfast
            </NavLink>
            <NavLink
              to="/menu/lunch"
              className="block px-4 py-2 hover:text-primary"
            >
              Lunch
            </NavLink>
            <NavLink
              to="/menu/dinner"
              className="block px-4 py-2 hover:text-primary"
            >
              Dinner
            </NavLink>
          </div>
        )}
      </li>
    </>
  );
}

export default Dropdownlist;
