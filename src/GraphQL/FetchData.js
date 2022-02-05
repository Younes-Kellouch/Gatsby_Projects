import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info:siteMetadata {
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
      info: { title },
    },
  } = data
  return (
    <div>
      <h2>{data.site.info.author}</h2>
      <h3>{title}</h3>
      <div>
        {data.site.info.complexData.map((item, index) => (
          <p key={index}>
            {item.name} : {item.age}
          </p>
        ))}
      </div>
    </div>
  )
}

export default FetchData
