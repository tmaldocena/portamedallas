import About from "../components/home/About"
import Affiliate from "../components/home/Affiliate"
import Contact from "../components/home/Contact"
import Hero from "../components/home/Hero"
import Populars from "../components/home/Populars"
import Promo from "../components/home/Promo"

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Populars />
      <Affiliate />
      <Promo />
      <Contact />
    </div>
  )
}

export default Home