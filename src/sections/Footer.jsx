import { footerLinks } from "../constants"

const Footer = () => {

  return (
    <main>
      <ul className="font-bold text-2xl text-coral-red flex justify-around items-start">
        {footerLinks.map( (item) => (
          <li className="text-white-400" key={item.title}>{item.title}
            <ul>
              {item.links.map((names) => (
                <li key={names.name} className="font-normal text-coral-red text-sm">
                    {names.name}
                </li>
              ))}
            </ul>
          </li>
        )

        )}
      </ul>
    </main>
  )
}

export default Footer