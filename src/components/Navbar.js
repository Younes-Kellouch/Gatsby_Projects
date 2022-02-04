import { Link } from "gatsby"
import React, { useState } from "react"
import { FiMenu } from "react-icons/fi"
import logo from "../assets/images/logo.svg"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const buttonClickHandler = () => {
    setShowLinks(!showLinks)
  }
  return (
    <nav className="navBar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={buttonClickHandler}>
            <FiMenu />
          </button>
        </div>
        <div className={showLinks ? "nav-links show-links" : "nav-links"}>
          <Link to="/" className="nav-link" activeClassName="active-link">
            home
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
          >
            recipes
          </Link>
          <Link to="/tags" className="nav-link" activeClassName="active-link">
            tags
          </Link>
          <Link to="/about" className="nav-link" activeClassName="active-link">
            about
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn">
              {" "}
              contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
