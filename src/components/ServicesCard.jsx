const ServicesCard = ({title, subTitle, image}) => {
  return (
    <div className="flex-1 items-start rounded-[15px] shadow-2xl px-10 py-16 sm:w-[350px] sm:min-w-[350px] w-full">
      <div className="bg-coral-red rounded-full flex justify-center p-3 w-11 h-11 items-center">
        <img src={image} alt={title} width={30} height={30}/>
      </div>

      <h2 className="font-bold mt-5 font-palanquin text-3xl">{title}</h2>
      
      <p className="text-slate-gray text-lg leading-normal info-text mt-3">{subTitle}</p>
      
    </div>  
  )
}

export default ServicesCard