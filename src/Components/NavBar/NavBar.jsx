import { Link, NavLink } from "react-router";
import { useState } from "react";

import NavList from "./NavList";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center p-4 xl:px-24">
          {/* Left Section (Mobile Menu & Logo) */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden bg-white border-none p-2 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-dark"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            {/* Logo */}
            <div className="text-3xl font-bold">
              <span className="bg-primary rounded px-2 text-white">F</span>
              <span className="text-dark"> OODI</span>
            </div>
          </div>

          {/* Center Navigation (Desktop Only) */}
          <nav className="hidden lg:flex">
            <NavList
              navClass="flex gap-6 text-dark"
              liClass="hover:text-primary"
            />
          </nav>

          {/* Right Section (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Search Icon */}
            <button className="p-2 rounded-full bg-white border-0">
              <svg
                width="20"
                height="20"
                className="text-dark hover:text-primary"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>

            {/* Cart Icon */}
            <div className="relative">
              <button className="p-2 rounded-full bg-white border-0">
                <svg
                  width="20"
                  height="20"
                  className="text-dark hover:text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </button>
              <span className="absolute -top-1 -right-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                8
              </span>
            </div>

            {/* Contact Button */}
            <NavLink to="/contact" className="primary-button px-6 py-2">
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-dark"
          >
            ✕
          </button>

          {/* Sidebar Content */}
          <nav className="p-6">
            <NavList
              navClass="space-y-4 text-dark"
              liClass="block p-2 hover:bg-primary rounded"
            />
            {/* Icons Section */}
            <div className="mt-6 flex flex-col items-start space-y-4">
              {/* Search Button */}
              <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-primary rounded">
                <svg
                  width="20"
                  height="20"
                  className="text-dark"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <span>Search</span>
              </button>

              {/* Cart Button */}
              <button className="flex items-center gap-2 p-2 w-full text-left hover:bg-gray-100 rounded relative">
                <svg
                  width="20"
                  height="20"
                  className="text-dark"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Cart</span>
                <span className="absolute top-0 right-0 text-xs bg-primary text-white px-2 py-0.5 rounded-full">
                  8
                </span>
              </button>

              {/* Contact Button */}
              <a className="w-full bg-primary text-white text-center py-2 rounded-full">
                Contact
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
