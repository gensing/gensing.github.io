import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components";

import Header from "./header"
import Footer from "./footer"
import "../styles/layout.css"

const GridContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
      "header"
      "main"
      "footer";
`;

const HeaderArea = styled.header`
  grid-area: header;
  
`;

const MainArea = styled.main`
  grid-area: main;
  margin: 0 auto;
  width: 80%;
  padding: 20px;
`;

const FooterArea = styled.footer`
  grid-area: footer;
  background-color: #f2f3f3;
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
    <GridContainer>
      <HeaderArea>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      </HeaderArea>
      <MainArea>
        {children}
      </MainArea>
      <FooterArea>
        <Footer/>
      </FooterArea>      
    </GridContainer>
  )
}

export default Layout
