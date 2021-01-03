import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "./Footer";
import Header from "./Header";

const Grid = styled.div`
  min-height: 100vh;
  /* grid container settings */
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
`;

export const Layout: React.FC = (props) => (
  <>
    <GlobalStyle />
    <Grid>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </Grid>
  </>
);
