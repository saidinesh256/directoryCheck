import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InitialLandingPage from './components/InitialLandingPage';
import { Helmet } from 'react-helmet';

const TITLE = 'Capital Numbers';

const routing = (
  <Router>
    <Helmet>
      <title>{TITLE}</title>
    </Helmet>
        <Routes>
          <Route exact path="/" element={<InitialLandingPage/>} ></Route>
        </Routes>
  </Router>
)

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(routing);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
