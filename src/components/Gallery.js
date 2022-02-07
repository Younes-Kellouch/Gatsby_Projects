import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`

const Gallery = () => {
  const data = useStaticQuery(query)
  const nodes = data.allFile.nodes
  return (
    <Wrraper>
      {nodes.map((image, index) => {
        const imageData = image.childImageSharp.gatsbyImageData
        return (
          <article key={index}>
            <GatsbyImage image={imageData} alt={image.name} />
            <p>{image.name}</p>
          </article>
        )
      })}
    </Wrraper>
  )
}

const Wrraper = styled.section`
  display: flex;
  flex-wrap: wrap;
`

export default Gallery
