import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#FAFAFA`,
      marginBottom: `3.80rem`,
    }}
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#000000`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="navLinksContainer">
      <Link
        className="navLink"
        to="/projects"
        style={{
          color: `#000000`,
          textDecoration: `none`,
        }}
      >
        projects
      </Link>
      <Link
        className="navLink"
        to="/about"
        style={{
          color: `#000000`,
          textDecoration: `none`,
        }}
      >
        about
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
