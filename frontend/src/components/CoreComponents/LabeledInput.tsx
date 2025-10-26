import type { ChangeEvent } from "react"

interface LabeledInputType{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void,
    type?: string
}

export const LabeledInput = ({label , placeholder, onChange, type}: LabeledInputType)=>{
    return (
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900">{label}</label>
            
            <input 
                id={label} 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder= {placeholder} 
                onChange={onChange}
                type = {type || 'text'}
            />
        </div>

    )
}