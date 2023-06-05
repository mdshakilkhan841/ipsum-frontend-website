import React from 'react'

export const ButtonType1 = (props) => {
    return (
        <button
            className=" border border-emerald-500 text-white bg-emerald-500 font-semibold text-base px-4 py-1.5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
        >{props.children}</button>
    )
}

export const ButtonType2 = (props) => {
    return (
        <button className="text-black border border-black hover:bg-black hover:text-white font-semibold text-base px-4 py-1.5 rounded outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button">
            {props.children}
        </button>
    )
}