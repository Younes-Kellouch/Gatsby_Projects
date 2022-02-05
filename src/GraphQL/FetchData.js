import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
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

const FetchData = () => {
  const data = useStaticQuery(getData)
  const {
    site: {
      siteMetadata: { title },
    },
  } = data
  return (
    <div>
      <h2>{data.site.siteMetadata.author}</h2>
      <h3>{title}</h3>
      <div>
        {data.site.siteMetadata.complexData.map((item, index) => (
          <p key={index}>
            {item.name} : {item.age}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FetchData
