import { star } from "../assets/icons"

const PopularProductCard = ({name, price, image}) => {
  return (
    <div key={name} className="flex flex-1 flex-col w-full max-sm:w-full items-center">
      <img src={image} alt={name} className="w-[282px] h-[282px]'"/>

      <div className="mx-3 my-4 text-slate-gray text-left">
        <div className="flex gap-3 text-xl">
          <img src={star} alt="Star sign"/>
          <p className="leading-normal">(4,5)</p>
        </div>

        <p className="leading-normal font-semibold font-palanquin text-2xl">{name}</p>
        <p className="leading-normal text-2xl font-semibold text-coral-red">{price}</p>
      </div>
    </div>
  )
}

export default PopularProductCard