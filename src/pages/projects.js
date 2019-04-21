import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <p>
      Working with clients to identify key performance goals through iterative
      design, rapid prototyping, and optimization.
    </p>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
