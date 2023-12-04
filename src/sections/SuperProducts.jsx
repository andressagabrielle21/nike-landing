import Button from "../components/Button"
import { shoe8 } from "../assets/images"

const SuperProducts = () => {
  return (
    <div className="flex justify-around items-stretch flex-wrap font-montserrat max-lg:flex-col gap-10 w-full max-container">

      <div className="lg:max-w-lg ">
        <h1 className="text-4xl font-bold font-palanquin">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h1>
        <p className="info-text mt-6">Ensuring premium comfort and style, our meticulously crafted
         footwear is designed to elevate your experience, providing you with
         unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="info-text mt-6 mb-10">Our dedication to detail and excellence ensures your satisfaction.</p>

        <div className="md:w-2/5 ">
          <Button label="View details" color="red"/>
        </div>
      </div>

      <div>
        <img src={shoe8} alt="shoe" width={570} height={522} className='object-contain'/>
      </div>
    </div>
  )
}

export default SuperProducts