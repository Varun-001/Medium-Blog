import type { MouseEventHandler } from "react"

interface ButtonType{
    label: string,
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({label, onClick}: ButtonType)=>{
    return (
        <div>
            <button 
                type="button" 
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none w-full font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={onClick}
            >
            {label}
            </button>
        </div>
    )
}