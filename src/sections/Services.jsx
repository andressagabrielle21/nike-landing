import ServicesCard from "../components/ServicesCard"
import { services } from "../constants"

const Services = () => {
  return (
    <main className="flex flex-wrap gap-10 justify-around items-center max-container">
      {services.map((item) => (
        <ServicesCard key={item} title={item.label} subTitle={item.subtext} image={item.imgURL} />)
      )}
    </main>
  )
}

export default Services