import React from "react";
import HeroPicture from "../assets/HeroPicture.png";
import { ButtonType1, ButtonType2 } from "./Button";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="text-gray-600 body-font lg:mt-[62px] mt-[54px]">
            <div className="flex justify-end md:px-0 px-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 max-w-3xl md:pl-5 lg:pr-50 md:pr-16 flex justify-end flex-col md:items-start md:text-left mb-10 md:mb-0 items-center text-center">
                    <h1 className="title-font lg:text-7xl text-5xl mt-4 mb-4 font-normal text-gray-900">
                        Lore <span className="font-bold">ipsum.</span>
                        <br className="inline-block" />
                        Dolor <span className="font-bold">sit.</span>
                    </h1>
                    <p className="mb-8 leading-relaxed lg:text-lg text-justify">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu. Sed ut perspiciatis unde omnis iste natus error.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <ButtonType2>
                            <span className="lg:px-2 lg:text-base text-xs">Viverra orci sagittis</span>
                        </ButtonType2>
                        <ButtonType1>
                            <div className="flex items-center space-x-2 lg:px-4">
                                <FaPlayCircle />
                                <span className="lg:text-base text-xs" >Get a demo</span>
                            </div>
                        </ButtonType1>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-end">
                    <img
                        className="object-cover object-center "
                        alt="hero"
                        src={HeroPicture}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
