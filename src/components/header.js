import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
      backgroundColor: `#161b22`
    }}
  >
    <Link
      to="/"
      style={{
        fontSize: `18px`,
        textDecoration: `none`,
        color: `white`,
        fontStyle:`italic`
      }}
    >
      {siteTitle}
    </Link>
  </header>
)

export default Header
