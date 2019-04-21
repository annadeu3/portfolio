import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>
      I am a user experience designer who is happiest when solving problems that
      can make a positive impact. The core of what I do stems from my passion of
      helping people and improving the world- both professionally and
      personally. My curiosity and constant willingness to learn gives me the
      opportunity to collaborate and work with others in teams to pinpoint and
      better understand people's behaviors, intentions, and motivations. All of
      which I think is a good starting point to any design thinking - as it
      allows the creation of clear, thoughtful, and meaningful solutions.
      Besides my love for UX design, if you get to know me you'll quickly find
      that I love eating ice cream at trendy parlors, swooning over good
      typography and checking out urban art murals & cool design installations.
    </p>
    <h2>Recognition</h2>
    <p>
      2018 Communicator Award - CSL.com - Award of Distinction- Features Visual
      Appeal - Aesthetics 2018 Communicator Award - CSL.com Award of Distinction
      - General Corporate Communications 2018 Communicator Award - ROCKWOOL -
      Award of Distinction - Features User Experience 2018 Communicator Award -
      ROCKWOOL Group - Award of Excellence - Features User Experience 2018
      Internationalist Award - CSL - Innovative Digital Solution - Silver 2018
      Internationalist Award - ROCKWOOL Group - Innovative Digital Solution -
      Silver
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
