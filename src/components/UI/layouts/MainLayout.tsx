import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";
import Footer from "../globals/Footer";
import Header from "../globals/Header";

const Grid = styled.div`
  min-height: 100vh;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;

  > *:nth-child(1) {
    background-color: black;
  }
  > *:nth-child(2) {
    width: 1280px;
    margin: 30px auto;
  }
  > *:nth-child(3) {
    background-color: black;
  }
`;

export const Layout: React.FC = (props) => (
  <>
    <GlobalStyle />
    <Grid>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Grid>
  </>
);
