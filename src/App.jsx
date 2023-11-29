import Navbar from "./components/Navbar";
import {Hero, Footer, GreatDeals, PopularProducts, Services, Reviews, Subscription, SuperProducts} from "./sections/index"

const App = () => {
  return (
    <main className="relative">

      <Navbar />

      <section className="xl:padding-1 wide:p-r p-b">
        <Hero />
      </section>

      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding">
        <SuperProducts />
      </section>

      <section className="p-x py-10">
        <Services />
      </section>

      <section className="padding">
        <GreatDeals />
      </section>

      <section className="bg-pale-blue padding">
        <Reviews />
      </section>

      <section className="p-x sm:py-32 py-16 w-full">
        <Subscription />
      </section>

      <section className="bg-black p-x p-t pb-8">
        <Footer />
      </section>

    </main>
  )
}

export default App;
