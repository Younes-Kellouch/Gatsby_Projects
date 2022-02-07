import React from "react"
import Layout from "../components/Layouts"
import AllRecipes from "../components/recipes/AllRecipes"

const Recipes = () => {
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}

export default Recipes
