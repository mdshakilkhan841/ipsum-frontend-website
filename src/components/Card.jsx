import React from "react";

export const CardType1 = (props) => {
    return (
        <div className="p-10 h-96 w-96 rounded-2xl" style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px' }}>
            <div className='h-10 w-14 absolute mt-3 ml-7 bg-[#AEE3A5] border border-white opacity-70 rounded-3xl'></div>
            <div className='bg-[#57BF73] h-16 w-16 rounded-full mb-12'></div>
            {props.children}
        </div>
    );
};

export const CardType2 = (props) => {
    return (
        <div
            className="p-10 h-96 w-96 rounded-2xl"
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
        >
            <div className='h-10 w-14 absolute mt-3 ml-7 bg-[#AEE3A5] border border-white opacity-70 rounded-3xl'></div>
            <div className='bg-[#57BF73] h-16 w-16 rounded-full mb-12'></div>
            {props.children}
        </div>
    );
};
