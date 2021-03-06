import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import Layout from "../components/Layouts"
import AllRecipes from "../components/recipes/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="Home Page" description="This is home page"/>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/big.jpg"
            alt="eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header>
        <AllRecipes/>

      </main>
    </Layout>
  )
}
