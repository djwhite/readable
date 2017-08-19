import React, { Component } from 'react';
import { Provider as RebassProvider } from 'rebass';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <RebassProvider>
        <div className="App">
          <Nav></Nav>
        </div>
      </RebassProvider>
    );
  }
}

export default App;
