import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "./components/templates/organisms/Layout";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/error" render={() => <div>error</div>} />
        <Route path="/:id" render={() => <DetailPage />} />
        <Route path="/" render={() => <ListPage />} />
        <Route render={() => <div>not found</div>} />
      </Switch>
    </Layout>
  );
}

export default App;
