import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.topicRef = React.createRef()
  }

  componentDidMount() {
    // start the text animation
    this.startTextAnimation(0)
  }

  // type one text in the typwriter
  // keeps calling itself until the text is finished
  typeWriter = (text, i, fnCallback) => {
    // chekc if text isn't finished yet
    if (i < text.length) {
      // add next character to h1
      console.log("text chage")

      this.topicRef.current.innerHTML =
        text.substring(0, i + 1) + '<span aria-hidden="true"></span>'

      // wait for a while and call this function again for next character
      setTimeout(() => {
        this.typeWriter(text, i + 1, fnCallback)
      }, 100)
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == "function") {
      // call callback after timeout
      setTimeout(fnCallback, 700)
    }
  }

  // start a typewriter animation for a text in the dataText array
  startTextAnimation = i => {
    // array with texts to type in typewriter
    const dataText = [
      "User experience design.",
      "Product design.",
      "Interactive Arts.",
      "New York City.",
      "Ice cream.",
    ]

    if (typeof dataText[i] == "undefined") {
      setTimeout(() => {
        this.startTextAnimation(0)
      }, 20000)
    }
    // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
      this.typeWriter(dataText[i], 0, () => {
        // after callback (and whole text has been animated), start next text
        this.startTextAnimation((i + 1) % dataText.length)
      })
    }
  }

  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h2>hello.</h2>
        <h2>
          UX Designer based in NYC—
          <br />
          Currently at Vertic, creating intentional and thoughtful experiences
          for users.
        </h2>
        <h3>
          I'm always happy to chat about
          <br />
          <span className="topic" ref={this.topicRef}>
            User experience design
          </span>
        </h3>

        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/projects/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
