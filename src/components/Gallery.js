import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            transformOptions: { grayscale: true }
            width: 200
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
      {nodes.map((image,index)=>{
        console.log(image)
        return(<article key={index}>{image.name}</article>)
      })}
    </Wrraper>
  )
}

const Wrraper = styled.section``

export default Gallery
