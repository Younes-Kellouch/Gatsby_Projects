import React from "react"
import TagsList from "../tags/TagsList"
import RecipesList from "./RecipesList"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    recipes: allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
  // const data = useStaticQuery(query)
  //const recipes=data.recipes.nodes

  //Destruction
  const {
    recipes: { nodes: recipes },
  } = useStaticQuery(query)

  console.log(recipes)
  return (
    <div>
      <h4>All Recipes</h4>
      <TagsList recipes={recipes}/>
      <RecipesList  recipes={recipes}/>
    </div>
  )
}

export default AllRecipes
