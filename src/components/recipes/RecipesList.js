import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import slugify from "slugify"

const RecipesList = ({ recipes = [] }) => {
  return (
    <div className="recipes-list">
      {recipes.map(recipe => {
        const { id, title, cookTime, prepTime, image } = recipe
        const slug = slugify(title, { lower: true })
        return (
          <Link to={`/${slug}`} key={id} className="recipe">
            <GatsbyImage
              image={getImage(image)}
              alt={title}
              className="recipe-img"
            />
            <h5>{title}</h5>
            <p>
              Prep: {prepTime}min | Cook: {cookTime} min
            </p>
          </Link>
        )
      })}
    </div>
  )
}

export default RecipesList
