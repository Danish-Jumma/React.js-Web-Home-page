import React from 'react'

function Para(props) {
    return (
        <>
        <p className={`font-medium text-[#4d4d4d] ${props.align} mt-3 text-[14px]`}>
            {props.text}
        </p>
        </>
    )
}

export default Para
