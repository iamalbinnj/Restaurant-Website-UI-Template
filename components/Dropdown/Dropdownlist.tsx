"use client"

import { useState, useRef, useEffect } from "react";
import Link from "next/link"; 

// Define props type
interface DropdownProps {
  liClass?: string;
  title: string;
}

const DropdownList: React.FC<DropdownProps> = ({ liClass = "", title }) => {
  const [dropdownList, setDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

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
    <li className="relative" ref={dropdownRef}>
      <button
        onClick={() => setDropdown(!dropdownList)}
        className={`${liClass} flex items-center gap-1`}
      >
        {title}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {dropdownList && (
        <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-50">
          <Link href="/menu" className="block px-4 py-2 hover:text-primary">
            Main Menu
          </Link>
          <Link href="/menu/breakfast" className="block px-4 py-2 hover:text-primary">
            Breakfast
          </Link>
          <Link href="/menu/lunch" className="block px-4 py-2 hover:text-primary">
            Lunch
          </Link>
          <Link href="/menu/dinner" className="block px-4 py-2 hover:text-primary">
            Dinner
          </Link>
        </div>
      )}
    </li>
  );
};

export default DropdownList;
