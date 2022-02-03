import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

/*We group all our global components in this Layouts components*/

const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layouts
