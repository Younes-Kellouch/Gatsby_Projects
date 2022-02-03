import { Link } from "gatsby"
import React from "react"
import Layouts from "../components/Layouts"

export default function Home() {
  return (
    <Layouts>
      <div>
        <h1>hey it's the first project we test here</h1>
        <h2>My name is younes and i'll be a millionare</h2>
        <p>good bye</p>
        <Link to="/about">About page</Link>
      </div>
    </Layouts>
  )
}
