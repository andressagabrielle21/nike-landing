import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const GreatDeals = () => {
  return (
    <div className="flex max-xl:flex-wrap justify-center items-center w-full gap-8">
      <img src={offer} alt="Great deals" />

      <div>
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-[62px] max-sm:leading-[72px] font-bold">
            <span className="text-coral-red inline-block mt-3">Special</span> Offer
        </h1>

        <p className="info-text mt-5">Embark on a shopping journey that redefines your experience with unbeatable deals. 
          From premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>

        <p className="info-text mt-3">
        Navigate a realm of possibilities designed to fulfill your unique desires, surpassing 
        the loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>

        <div className="mt-10 flex max-xl:flex-col justify-start max-md:justify-center items-center gap-6">
          <Button color="red" label="Shop now" iconUrl={arrowRight}/>
          <Button color="white" label="Learn more"/>
        </div>

      </div>
    </div>
  )
}

export default GreatDeals;