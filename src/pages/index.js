import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import poop from "../images/csl.png"

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
    // check if text isn't finished yet
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
          <strong>UX Designer based in NYC—</strong>
        </h2>

        <h3>
          Currently at Vertic, creating intentional and thoughtful experiences
          for users.
        </h3>
        <h3>
          I'm always happy to chat about
          <br />
          <span className="topic" ref={this.topicRef}>
            User experience design
          </span>
        </h3>
        <br />
        <br />
        <section id="project1" class="section">
          <div class="project-container">
            <div class="project-title">
              <h1 class="big-title"> CSL</h1>
              <div class="project-short-description">
                <div class="dash"> </div>
                <p>
                  {" "}
                  Led the UX Design of the website redesign of CSL and CSL
                  Behring, a global specialty biotechnology company.
                </p>
              </div>
            </div>

            <div class="project-img">
              <img src={poop} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section id="project2" class="section">
          <div class="project-container">
            <div class="project-title">
              <h1 class="big-title"> SAP Ariba Brand Tool</h1>
              <div class="project-short-description">
                <div class="dash"> </div>
                <p>
                  {" "}
                  Designed a new brand central for users to access the SAP Ariba
                  brand assets and images.
                </p>
              </div>
            </div>

            <div class="project-img">
              <img src={poop} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <section id="project3" class="section">
          <div class="project-container">
            <div class="project-title">
              <h1 class="big-title"> GDPR Benchmark</h1>
              <div class="project-short-description">
                <div class="dash"> </div>
                <p>
                  {" "}
                  Designed an assessment tool used to assess the readiness
                  towards being GDPR compliant
                </p>
              </div>
            </div>

            <div class="project-img">
              <img src={poop} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <section id="project4" class="section">
          <div class="project-container">
            <div class="project-title">
              <h1 class="big-title"> Barter Sugar</h1>
              <div class="project-short-description">
                <div class="dash"> </div>
                <p>
                  {" "}
                  Strategy and design of a global marketplace experience where
                  people can connect to trade goods, services, and spaces
                </p>
              </div>
            </div>

            <div class="project-img">
              <img src={poop} />
            </div>
          </div>
        </section>
        <br />
        <br />
        <Link to="/projects/">Go to page 2</Link>
      </Layout>
    )
  }
}

export default IndexPage
