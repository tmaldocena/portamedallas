/* eslint-disable react/prop-types */
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const DefaultLayout = ( { children }) => {
  return (
    <div>
        <Navbar />
        { children }
        <Footer />
    </div>
  )
}

export default DefaultLayout