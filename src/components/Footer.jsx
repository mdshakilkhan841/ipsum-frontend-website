import React from 'react';
import LogoBlack from "../assets/LogoBlack.svg";

const Footer = () => {
    return (
        <footer className="text-black bg-[#C9C9C9] body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="md:w-1/2 flex flex-col md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 px-5 space-y-5 lg:pl-14">
                    <div className='flex md:justify-start justify-center'>
                        <img src={LogoBlack} alt="logoBlack" />
                    </div>
                    <h1 className="text-xl font-bold">Tristique senectus et netus
                        <br />et malesuada fames</h1>
                    <p className="text-sm text-gray-500">©2023 Logoipsum. All rights reserved</p>
                </div>
                <div className="flex-grow flex justify-center md:justify-end -mb-10 md:text-left text-center order-first lg:pr-14 md:border-r-2 md:border-black">
                    <div className="px-5">
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-5">Products</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Features</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Exterprice</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Innovation</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Offline</a>
                            </li>
                        </nav>
                    </div>
                    <div className="px-5">
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-5">Company</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">About</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Our Story</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Careers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="px-5">
                        <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-5">Support</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Documentation</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Community</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">Contact</a>
                            </li>
                            <li>
                                <a className="text-gray-600 hover:text-gray-800">FAQ</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer