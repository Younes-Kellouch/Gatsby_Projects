import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layouts from "../components/Layouts"

const about = () => {
  return (
    <Layouts>
      <Wrraper>
        <div> About Page</div>
        <Link to="/">Home</Link>
      </Wrraper>
    </Layouts>
  )
}

const Wrraper = styled.section`
  font-weight: bold;
  color: pink;

  a {
    text-decoration: none;
    color: green;
  }
`

export default about
