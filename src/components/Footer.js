import React from "react"

const Footer = () => {
  return (
    <footer className="page-footer">
      <p>
        &copy; {new Date().getFullYear()} <span>SimpleRecipes</span>
      </p>{" "}
      Built with <a href="https://www.gatsbyjs.com/">Gatsby</a>
    </footer>
  )
}

export default Footer
