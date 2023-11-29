import Button from "../components/Button"
import { arrowRight } from "../assets/icons"

const Hero = () => {
  return (
    <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:2/5 flex flex-col justify-center items-start w-full max-xl:p-x pt-28">
        <p>Our summer collection</p>
        <h1>
          <span>The New Arrivals</span>
          <br />
          <span>Nike</span> Shoes
        </h1>

        <p>Discover stylish Nike arrivals, quality comfort and innovation for your active life.</p>

        <Button label="Shop Now" iconUrl={arrowRight}/>
      </div>
    </section>
  )
}

export default Hero