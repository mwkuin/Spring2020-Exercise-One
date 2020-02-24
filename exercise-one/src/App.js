import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//Styles
import './App.css';

import ArticleListing from './pages/articleListing';
import Article from './pages/article'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> //switch statement
          <Route path="/article/:id">
            <Article />
          </Route>
          <Route path="/">
            <ArticleListing />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
