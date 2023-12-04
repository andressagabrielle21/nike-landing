import { products } from "../constants"
import PopularProductsCard from "../components/PopularProductsCard"

const PopularProducts = () => {

  return (
    <div className="font-montserrat w-full max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h1 className="font-bold font-palanquin text-4xl">Our <span className="text-coral-red">Popular</span> Products</h1>

        <p className="font-montserrat text-slate-gray text-lg font-normal leading-7 mt-5">
          Experience top-notch quality and style with our sought-after <br className="max-md:hidden"/> selections. Discover a world of comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((item) => (
            <PopularProductsCard key={item} name={item.name} image={item.imgURL} price={item.price}/>
          )
        )}
      </div>
    </div>
  )
}

export default PopularProducts 