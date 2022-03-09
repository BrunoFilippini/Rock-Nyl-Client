import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import vinyl from "../../images/logoRockNyl.png";

export function NavBar2() {
  return (
    <nav className="navClass bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="iconTitle">
          <div>
            <img className="imgVinyl" src={vinyl} alt="discImg"></img>
          </div>
          <div className="titleNav">
            <Link className="nav-link title" to="/#">
              Rock'Nyl
            </Link>
          </div>
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="textRobot flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-400 md:dark:hover:bg-transparent dark:border-gray-700"
                to="/artists-list"
              >
                Shop By Artist
              </Link>
            </li>

            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-400 md:dark:hover:bg-transparent dark:border-gray-700"
                to="/albuns-list"
              >
                Shop By Album
              </Link>
            </li>

            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-400 md:dark:hover:bg-transparent dark:border-gray-700"
                to="/myAccount"
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-400 md:dark:hover:bg-transparent dark:border-gray-700"
                to="/login"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-100 md:dark:hover:text-amber-400 dark:hover:bg-gray-700 dark:hover:text-amber-400 md:dark:hover:bg-transparent dark:border-gray-700"
                to="/signUp"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
