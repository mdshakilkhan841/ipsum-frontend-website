import React, { useState } from "react";
import Logo from "../assets/Logo.svg";

import { GoThreeBars } from "react-icons/go";
import { MdClose } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

import { ButtonType1, ButtonType2 } from "./Button";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-5 py-3 bg-white shadow-md mb-3">
                <div className="container mx-auto flex flex-wrap items-center justify-between lg:space-x-20">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img src={Logo} alt="logo" width={150} />
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
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
                                <ButtonType1 name="Get Started" width={120}/>
                                <ButtonType2 name="Login" width={80} />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}