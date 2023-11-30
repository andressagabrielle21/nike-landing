import { services } from "../constants"

const Services = () => {
  return (
    <main> 
      <ul className="flex flex-wrap w-full justify-between items-center">
        {services.map((item) => (
          <li key={item.label} className="font-bold text-coral-red text-2xl font-montserrat">
            {item.label}
            <p className="text-sm text-normal text-slate-gray w-80">{item.subtext}</p>
          </li>)
        )}
      </ul>
    </main>
  )
}

export default Services