import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import poop from "../images/csl.png"
import ReactFullpage from "@fullpage/react-fullpage"

const pluginWrapper = () => {
  require("fullpage.js/vendors/scrolloverflow")
}

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

        <ReactFullpage
          render={({ state, fullpageApi }) => {
            console.log("render prop change", state) // eslint-disable-line no-console

            if (state.callback === "onLeave") {
              if (state.direction === "down") {
                console.log("going down..." + state.origin.index)
              }
            }
            return (
              <div id="fullpage-wrapper">
                <div className="section section1">
                  <h2>hello.</h2>
                  <h2>
                    <strong>UX Designer based in NYC—</strong>
                  </h2>

                  <h3>
                    Currently at Vertic, creating intentional and thoughtful
                    experiences for users.
                  </h3>
                  <h3>
                    I'm always happy to chat about
                    <br />
                    <span className="topic" ref={this.topicRef}>
                      User experience design
                    </span>
                  </h3>
                </div>
                <div className="section">
                  <div className="background-color-block" />
                  <section id="project1" className="section">
                    <div className="project-container">
                      <div className="project-title">
                        <h1 className="big-title"> CSL</h1>
                        <div className="project-short-description">
                          <div className="dash"> </div>
                          <p>
                            {" "}
                            Led the UX Design of the website redesign of CSL and
                            CSL Behring, a global specialty biotechnology
                            company.
                          </p>
                        </div>
                      </div>

                      <div className="project-img">
                        <img src={poop} />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section id="project2" className="section">
                    <div className="project-container">
                      <div className="project-title">
                        <h1 className="big-title"> SAP Ariba Brand Tool</h1>
                        <div className="project-short-description">
                          <div className="dash"> </div>
                          <p>
                            {" "}
                            Designed a new brand central for users to access the
                            SAP Ariba brand assets and images.
                          </p>
                        </div>
                      </div>

                      <div className="project-img">
                        <img src={poop} />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section id="project3" className="section">
                    <div className="project-container">
                      <div className="project-title">
                        <h1 className="big-title"> GDPR Benchmark</h1>
                        <div className="project-short-description">
                          <div className="dash"> </div>
                          <p>
                            {" "}
                            Designed an assessment tool used to assess the
                            readiness towards being GDPR compliant
                          </p>
                        </div>
                      </div>

                      <div className="project-img">
                        <img src={poop} />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <section id="project4" className="section">
                    <div className="project-container">
                      <div className="project-title">
                        <h1 className="big-title"> Barter Sugar</h1>
                        <div className="project-short-description">
                          <div className="dash"> </div>
                          <p>
                            {" "}
                            Strategy and design of a global marketplace
                            experience where people can connect to trade goods,
                            services, and spaces
                          </p>
                        </div>
                      </div>

                      <div className="project-img">
                        <img src={poop} />
                      </div>
                    </div>
                  </section>
                </div>
                <div className="section">
                  <Link to="/projects/">Go to page 2</Link>
                </div>
              </div>
            )
          }}
        />
      </Layout>
    )
  }
}

export default IndexPage
