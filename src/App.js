import React from 'react';
import './App.css';
import { table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from 'react-helmet';

const TITLE = 'FiveBelow';

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      </>
    );
  }
}

export default App;
