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
          placeholder="tracedSVG"
          layout="constrained"
          className="example-image"
          as="section"
        />
      </article>
      <article>
        <h4>Fixed</h4>
        <StaticImage
          src="../assets/images/big.jpg"
          alt="food"
          placeholder="blurred"
          layout="fixed"
          className="example-image"
          width={400}
        />
      </article>
    </Wrraper>
  )
}

const Wrraper = styled.section`
    width: 70vw;
    margin: 0 auto;
    display: grid;
    text-align: center;
    gap: 2rem;

    article{
        border: 2px solid blue;
    }
    .example-image{
        border-radius: 1rem;
    }
/*
    @media (min-width:992px){
        grid-template-columns: 1fr 1fr 1fr;
    }*/
`

export default Images
