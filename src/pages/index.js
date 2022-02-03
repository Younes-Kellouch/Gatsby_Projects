import { Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <section>
      <div>
        <h1>hey it's the first project we test here</h1>
        <h2>My name is younes and i'll be a millionare</h2>
        <p>good bye</p>
        <Link to="/about">About page</Link>
      </div>
    </section>
  )
}
