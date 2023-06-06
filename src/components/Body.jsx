import React from "react";
import Table from "./Table";
import Table3 from "./Table3";
import { ButtonType1 } from "./Button";
import { FaChartPie } from "react-icons/fa";
import { HiChartBar } from "react-icons/hi";
import { TbChartDots3 } from "react-icons/tb";
import { LuBarChart } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";

//Icon
import { IconCard, IconCardRound } from "./IconCard";
import fb from "../assets/fb.png";
import adwords from "../assets/adwords.png";
import shopify from "../assets/shopify.png";
import tiktok from "../assets/tik-tok.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";
import snapchat from "../assets/snapchat.png";
import taboola from "../assets/taboola.png";
import outbrain from "../assets/outbrain.png";
import report from "../assets/report.svg";
import tableReport from "../assets/tableReport.svg";
import { CardType1, CardType2 } from "./Card";
import { Table21, Table22 } from "./Table2";

const Body = () => {
    return (
        <section className="text-black body-font">
            {/* //body 1 */}
            <div className="container px-5 mx-auto mt-20 mb-10">
                <h2 className="md:text-3xl text-xl font-semibold text-center mb-10">
                    Ut enim ad minima veniam, quis nostrum
                    <br />
                    exercitationem ullam corporis suscipit
                </h2>
                <Table />
            </div>

            {/* //Body 2 */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="p-4 md:w-1/2 w-full flex justify-center items-center">
                        <div className="space-y-8">
                            <h1 className="md:text-5xl text-3xl font-semibold">
                                Sed ut perspiciatis unde omnis iste natus error.
                                <span className="font-bold">Try out!</span>
                            </h1>
                            <h2 className="text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore ullamco esse cillium
                            </h2>
                            <ButtonType1>Try Out Now!</ButtonType1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full flex justify-center md:mt-0 mt-10">
                        <div className="flex lg:space-x-10 md:space-x-6 space-x-10">
                            <div className="space-y-10">
                                <IconCard>
                                    <img src={adwords} alt="fb" className="h-14 w-14" />
                                </IconCard>
                                <IconCard>
                                    <img src={fb} alt="fb" className="h-14 w-14" />
                                </IconCard>
                                <IconCard>
                                    <img src={shopify} alt="fb" className="h-14 w-14" />
                                </IconCard>
                            </div>
                            <div className="mt-24 space-y-10">
                                <IconCard>
                                    <img src={tiktok} alt="fb" className="h-14 w-14" />
                                </IconCard>
                                <IconCard>
                                    <img src={pinterest} alt="fb" className="h-14 w-14" />
                                    <p className="text-xs mt-1">Coming soon</p>
                                </IconCard>
                                <IconCard>
                                    <img src={twitter} alt="fb" className="h-14 w-14" />
                                    <p className="text-xs mt-1">Coming soon</p>
                                </IconCard>
                            </div>
                            <div className="space-y-10">
                                <IconCard>
                                    <img src={snapchat} alt="fb" className="h-14 w-14" />
                                    <p className="text-xs mt-1">Coming soon</p>
                                </IconCard>
                                <IconCard>
                                    <img src={taboola} alt="fb" className="h-12 w-14" />
                                    <p className="text-xs mt-1">Coming soon</p>
                                </IconCard>
                                <IconCard>
                                    <img src={outbrain} alt="fb" className="h-14 w-14" />
                                    <p className="text-xs mt-1">Coming soon</p>
                                </IconCard>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Body 3 */}
            <div class="container px-5 mx-auto">
                <div class="flex flex-wrap justify-center -m-4">
                    <div class="p-4 lg:w-1/3">
                        <div>
                            <CardType1>
                                <FaChartPie className="absolute -mt-[92px] ml-9 text-2xl text-white z-20" />
                                <div className="space-y-5">
                                    <h2 className="text-lg font-bold">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                                    </h2>
                                    <p className="font-medium text-gray-600 text-justify">
                                        Convallis a cras semper auctor neque. Fringilla est
                                        ullamcorper eget nulla facilisi etiam dignissim, eiusmod
                                        tempor incididunt ut labore
                                    </p>
                                </div>
                            </CardType1>
                        </div>
                    </div>

                    <div class="p-4 lg:w-1/3">
                        <div>
                            <CardType2>
                                <HiChartBar className="absolute -mt-[92px] ml-9 text-2xl text-white z-20" />
                                <div className="space-y-5">
                                    <h2 className="text-lg font-bold">
                                        Sed do eiusmod tempor incididunt ut labore{" "}
                                    </h2>
                                    <p className="font-medium text-gray-600 text-justify">
                                        Convallis a cras semper auctor neque. Fringilla est
                                        ullamcorper eget nulla facilisi etiam dignissim elit duis
                                        tristique solicitudin vel
                                    </p>
                                </div>
                            </CardType2>
                        </div>
                    </div>
                    <div class="p-4 lg:w-1/3">
                        <div class="">
                            <CardType1>
                                <TbChartDots3 className="absolute -mt-[92px] ml-9 text-2xl text-white z-20" />
                                <div className="space-y-5">
                                    <h2 className="text-lg font-bold">
                                        Quis autem vel eum iure reprehenderit qui in ea voluptate
                                    </h2>
                                    <p className="font-medium text-gray-600 text-justify">
                                        Look no further for seamless multi-channel attribution. Our
                                        process is complete and customizatible, allowing you to view
                                        your
                                    </p>
                                </div>
                            </CardType1>
                        </div>
                    </div>
                </div>
            </div>


            {/* //Body 4 */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 justify-center">
                    <div className="p-4 md:w-1/2 w-full flex justify-center items-center">
                        <div className="space-y-6">
                            <h1 className="md:text-3xl text-2xl font-semibold">
                                Nemo enim ipsam quia{" "}
                            </h1>
                            <h2 className="text-xl">
                                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                                consectetur, adipisci velit, sed qu nemo enim
                            </h2>
                            <div className="space-y-6">
                                <div
                                    className="h-10 w-80 rounded-xl flex px-5 items-center space-x-6"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
                                >
                                    <FaRegCheckCircle className=" text-green-500" />
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                                <div
                                    className="h-10 w-80 rounded-xl flex px-5 items-center space-x-6"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
                                >
                                    <FaRegCheckCircle className=" text-green-500" />
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                                <div
                                    className="h-10 w-80 rounded-xl flex px-5 items-center space-x-6"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
                                >
                                    <FaRegCheckCircle className=" text-green-500" />
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                                <div
                                    className="h-10 w-80 rounded-xl flex px-5 items-center space-x-6"
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" }}
                                >
                                    <FaRegCheckCircle className=" text-green-500" />
                                    <p>Sed ut perspiciatis unde</p>
                                </div>
                            </div>
                            <ButtonType1>Try Out Now!</ButtonType1>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full flex justify-center md:mt-0 mt-10">
                        <div className="flex lg:space-x-10 md:space-x-6 space-x-10">
                            <img src={tableReport} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* //Body 5 */}
            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font md:text-3xl text-2xl mb-4 font-medium text-gray-900">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                        </h1>
                        <p className="mb-8 leading-relaxed px-20 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore
                        </p>
                    </div>
                    <img src={report} alt="report" />
                </div>
            </div>

            {/* //body 6 */}
            <div className="container px-5 mx-auto mt-20 mb-10">
                <div className="flex lg:flex-row flex-col md:justify-around">
                    <Table21 />
                    <Table22 />
                </div>
            </div>

            {/* //Body 7 */}
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap m-4 justify-center">
                    <div className="p-4 md:w-1/2 w-full flex justify-center items-center">
                        <div className="space-y-8">
                            <h1 className="md:text-3xl text-2xl font-semibold">
                                Consectetur adipiscing elit
                            </h1>
                            <h2 className="text-2xl">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore ullamco esse cillium
                            </h2>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full flex justify-center md:mt-0 mt-10">
                        <div className="flex lg:space-x-10 md:space-x-6 space-x-10">
                            <IconCard>
                                <LuBarChart className="text-8xl transform scale-x-[-1] text-[#58BF73] " />
                            </IconCard>
                            <IconCard>
                                <LuBarChart className="text-8xl text-orange-500" />
                            </IconCard>
                            <IconCardRound className="rounded-full">
                                <p className="text-center">
                                    <span className="text-5xl">3</span>
                                    <br />
                                    +Custom
                                    <br /> ones
                                </p>
                            </IconCardRound>
                        </div>
                    </div>
                </div>
            </div>

            {/* //Body 8 */}
            <div className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font md:text-3xl text-2xl mb-4 font-medium text-gray-900">
                            Ullamcorper morbi tincidunt ornare massa eget. Quam viverra orci
                            sagittis eu volutpat odio
                        </h1>
                        <p className="mb-8 leading-relaxed px-20 text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore{" "}
                        </p>
                    </div>
                    <div className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 rounded flex lg:space-x-10 md:space-x-6 space-x-10">
                        {/* <div className=''> */}
                        <div className="mt-20">
                            <IconCard>
                                <img src={fb} alt="fb" className="h-14 w-14" />
                            </IconCard>
                        </div>
                        <div className="space-y-10">
                            <IconCard>
                                <img src={adwords} alt="fb" className="h-14 w-14" />
                            </IconCard>
                            <IconCard>
                                <img src={shopify} alt="fb" className="h-14 w-14" />
                            </IconCard>
                        </div>
                    </div>
                </div>
            </div>

            {/* //body 9 */}
            <div className="container px-5 mx-auto mt-20 mb-24">
                <Table3 />
            </div>

            {/* //Body 10 */}
            <div className="container px-5 mx-auto">
                <div className="flex justify-center mb-24 md:space-x-20">
                    <div className="md:w-1/2">
                        <h1 className="md:text-3xl text-2xl font-semibold  xl:px-20">
                            Ullamcorper morbi tincidunt ornare massa eget
                        </h1>
                        <h2 className="text-xl xl:pl-20">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore
                        </h2>
                    </div>
                    <div className="flex justify-center items-center">
                        <ButtonType1>Apply!</ButtonType1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Body;
