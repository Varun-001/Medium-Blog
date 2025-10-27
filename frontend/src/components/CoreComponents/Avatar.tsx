
export const Avatar = ({ name, size= "small" } : { name : string, size?:string }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${size === "small" ? "w-6 h-6" : "w-10 h-10"} overflow-hidden bg-gray-600 rounded-full`}>
        <span className={`${size === "small"? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
          {name[0]}
        </span>
        
    </div>
  )
}


