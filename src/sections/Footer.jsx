import { footerLinks, socialMedia } from "../constants"
import { footerLogo } from "../assets/images"

const Footer = () => {

  return (
    <main >
        <div className="flex flex-wrap justify-around items-center">
          <div className="flex flex-col gap-5">
            <img src={footerLogo} alt="Nike Logo black and white" width={200} height={200}/>

            <p className="info-text lg:max-w-md mt-5">Get shoes ready for the new term at your nearest Nike store. 
            Find Your perfect Size In Store. Get Rewards.
            </p>

            <div className="flex justify-start items-center gap-3">
              {socialMedia.map((item) => (
                <img className="bg-white rounded-full p-4" key={item.alt} src={item.src} alt={item.alt}/>
              ))}
            </div>
          </div>

          <div className="flex max-md:flex-col max-md:mt-10 justify-around items-start gap-10">
            {footerLinks.map( (item) => (
              <div key={item}>
                <h3 className="font-bold text-3xl text-coral-red font-palanquin">{item.title}</h3>
                  {item.links.map((names) => (
                    <p key={names.name} className="font-normal info-text pb-2">
                        {names.name}
                    </p>
                  ))}
              </div>
            )

            )}
          </div>
        </div>

      <div className="flex justify-between items-center info-text mt-10">
        <p> © Copyright. All rights reserved.</p>

        <p>Terms & Conditions</p>
      </div>
    </main>
  )
}

export default Footer