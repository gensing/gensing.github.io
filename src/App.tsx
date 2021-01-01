import React from "react";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./components/styles/GlobalStyle";
import Header from "./components/templates/Header";
import Footer from "./components/templates/Footer";
import Wrapper from "./components/templates/Wrapper";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

const Layout: React.FC = (props) => (
  <div>
    <GlobalStyle />
    <Header />
    <main>
      <Wrapper>{props.children}</Wrapper>
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/error" render={() => <div>error</div>} />
        <Route path="/article/:id" render={() => <DetailPage />} />
        <Route path="/article/" render={() => <ListPage />} />
        <Route path="/" render={() => <ListPage />} />
        <Route render={() => <div>not found</div>} />
      </Switch>
    </Layout>
  );
}

export default App;
