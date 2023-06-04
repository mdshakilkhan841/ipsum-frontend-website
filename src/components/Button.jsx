import React from 'react'

export const ButtonType1 = ({ name }) => {
    return (
        <button
            className=" border border-emerald-500 text-white bg-emerald-500 font-semibold text-base px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
        >{name}</button>
    )
}

export const ButtonType2 = ({ name }) => {
    return (
        <button className="text-black border border-black hover:bg-black hover:text-white font-semibold text-base px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            {name}
        </button>
    )
}