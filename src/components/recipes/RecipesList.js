import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, cookTime, prepTime, image } = recipe
        return (
          <Link to={`/${title}`} key={id} className="recipe">
            <GatsbyImage image={getImage(image)} alt={`${title}`} />
            <h5>{title}</h5>
            <p>Prep: {prepTime}min | Cook: {cookTime} min</p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
