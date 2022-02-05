import { graphql } from "gatsby"
import React from "react"

const TestingPage = ({ data }) => {
  return <div>Author: {data.site.info.author}</div>
}

export const data = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
      }
    }
  }
`
export default TestingPage
