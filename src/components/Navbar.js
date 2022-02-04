import { Link } from "gatsby"
import React from "react"

const Navbar = () => {
  return <nav>
      <ul>
          <li>
              <Link to="/">home</Link>
          </li>
          <li>
              <Link to="/about">about</Link>
          </li>
          <li>
              <Link to="/contact">contact</Link>
          </li>
          <li>
              <Link to="/tags">tags</Link>
          </li>
          <li>
              <Link to="/recipes">recipes</Link>
          </li>
      </ul>
  </nav>
}

export default Navbar
