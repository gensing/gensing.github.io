import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const Wrapper = styled.div`
  margin: 20px auto;
  max-width: var(--size-content);
  padding: var(--size-gutter)'
`;

const Main = styled.main`
  min-height: 500px;
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper>
        <Main>{children}</Main>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Layout
