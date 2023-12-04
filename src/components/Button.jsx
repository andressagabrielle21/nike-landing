const Button = ({label, iconUrl, color}) => {
  return (
    <div className={`flex justify-center text-lg
    items-center gap-2 px-7 py-4 ${color === "red" ? "bg-coral-red border-coral-red text-white" : "bg-white border-black border-[1px] text-slate-gray"} 
    font-montserrat leading-none rounded-full
   cursor-pointer`}>

      {label} 

      {iconUrl && <img src={iconUrl} alt="arrow right" className="ml-2 rounded-full w-5 h-5"/>}
      
    </div>
  )
}

export default Button;