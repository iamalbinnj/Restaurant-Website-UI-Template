"use client"

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Dropdownlist from "../Dropdown/Dropdownlist";

// Define props type
interface NavListProps {
  navClass?: string;
  liClass?: string;
}

const NavList: React.FC<NavListProps> = ({ navClass = "", liClass = "" }) => {
  const [dropdownlist, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <ul className={navClass} ref={dropdownRef}>
      <li>
        <Link href="/" className={liClass}>
          Home
        </Link>
      </li>
      <Dropdownlist liClass={liClass} title="Menu" />
      <Dropdownlist liClass={liClass} title="Services" />
      <li>
        <Link href="/offers" className={liClass}>
          Offers
        </Link>
      </li>
    </ul>
  );
};

export default NavList;
