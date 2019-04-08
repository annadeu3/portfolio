import React from "react"

const Footer = () => (
  <footer>
    <div className="a-container">
      <section id="mainfooter">
        <h1 className="a-left">
          For inquiries and collaboration, contact me here:
          <br />
          annadeu3@gmail.com
        </h1>
      </section>
      <div className="social">
        <h5>Find me online</h5>
        <p>LinkedIn</p>
        <p>Twitter</p>
        <p>Medium</p>
        <p>Instagram</p>
      </div>
      {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
