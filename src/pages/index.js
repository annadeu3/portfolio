import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h2>I help various brands make an impact on their customers by thoughtful user experience design.</h2>
    <p>Testing.</p>
    <p>Lorem Ipsum </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/projects/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
