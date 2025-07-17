import React from 'react'

function Button(props) {
    const { buttonText, onClick, style, disabled } = props
    return (
        <div>
            <button disabled={disabled} style={style} onClick={onClick} className="bg-[#0e91ab] w-full text-white px-6 py-2 rounded-md hover:bg-[#fff] hover:text-[#0e91ab] cursor-pointer border-[1px] border-[#0e91ab] transition-colors duration-200 font-medium text-sm">
                {buttonText}
            </button>
        </div>
    )
}

export default Button