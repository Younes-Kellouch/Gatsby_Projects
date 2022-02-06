import React from "react"
import Gallery from "../components/Gallery"
import Layout from "../components/Layouts"

const gallery = () => {
  return (
    <Layout>
      <main className="page">
        <Gallery />
      </main>
    </Layout>
  )
}

export default gallery
