import { Link } from "gatsby"
import React from "react"
import Layouts from "../components/Layouts"

const about = () => {
  return (
    <Layouts>
      <div> About Page</div>
      <Link to="/">Home</Link>
    </Layouts>
  )
}

export default about
