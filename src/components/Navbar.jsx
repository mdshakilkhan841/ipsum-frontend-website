import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

import { ButtonType1, ButtonType2 } from "./Button";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
            <nav className="w-full z-10 top-0 fixed bg-white shadow-md">
                <div className="container mx-auto px-5 py-3 flex flex-wrap items-center justify-between lg:space-x-20">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src={Logo} alt="logo" width={150} />
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-1 py-1 border border-solid border-black border-transparent rounded block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            {
                                navbarOpen ? <MdClose /> : <GoThreeBars />
                            }
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex lg:flex-grow" +
                            (navbarOpen ? "flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:space-x-3 lg:mt-0 mt-5">
                            <li className="px-3 py-2 flex items-center text-base font-semibold leading-snug text-black hover:opacity-75 space-x-1">
                                <span className="ml-2">Products</span><FiChevronDown />
                            </li>
                            <li className="px-3 py-2 flex items-center text-base font-semibold leading-snug text-black hover:opacity-75">
                                <span className="ml-2">About Us</span>
                            </li>
                            <li className="px-3 py-2 flex items-center text-base font-semibold leading-snug text-black hover:opacity-75">
                                <span className="ml-2">Contacts</span>
                            </li>
                        </ul>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto lg:mt-0 mt-5">
                            <li className="space-x-6">
                                <ButtonType1>Get Started</ButtonType1>
                                <ButtonType2>Login</ButtonType2>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

    );
}