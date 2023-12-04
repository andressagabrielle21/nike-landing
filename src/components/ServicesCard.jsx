const ServicesCard = ({title, subTitle, image}) => {
  return (
    <div className="flex-1 items-start rounded-[15px] shadow-2xl px-10 py-16 w-full">
      <img src={image} alt={title} />

      <h2 className="font-bold mb-6 font-palanquin text-3xl">{title}</h2>
      
      <p className="text-slate-gray text-lg leading-normal">{subTitle}</p>
      
    </div>  
  )
}

export default ServicesCard