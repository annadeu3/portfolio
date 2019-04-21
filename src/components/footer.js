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
        <div className="social-links-container">
          <a href="https://www.linkedin.com/in/annadeu/">LinkedIn</a>
          <a href="https://twitter.com/Honeydeu">Twitter</a>
          <a href="https://medium.com/@annadeu">Medium</a>
          <a href="https://www.instagram.com/anna.deu/">Instagram</a>
        </div>
      </div>
      {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
