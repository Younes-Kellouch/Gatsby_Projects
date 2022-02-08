import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layouts"
import setUpTags from "../utils/setUpTags"

const Tags = ({
  data: {
    allContentfulRecipe: { nodes },
  },
}) => {
  const newTags = setUpTags(nodes)
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, nbr] = tag
            return (
              <Link to={`/${text}`} key={index} className="tag">
                <h5>{text}</h5>
                <p>{nbr} recipe</p>
              </Link>
            )
          })}
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`

export default Tags
