import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"

const Images = () => {
  return (
    <Wrraper>
      <article>
        <h4>constrained /default</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          height={400}
          placeholder="tracedSVG"
          layout="constrained"
          className="example-image"
          as="section"
        />
        <h1>Gatsby Images</h1>
      </article>
    </Wrraper>
  )
}

const Wrraper = styled.section`
    width: 70vw;
    margin: 0 auto;
    article{
        border: 2px solid blue;
    }
    .example-image{
        border-radius: 1rem;
    }
`

export default Images
