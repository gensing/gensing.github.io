import * as React from "react"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
    }}
  >
    © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://github.com/gensing">gensing github</a>
  </footer>
)

export default Footer
