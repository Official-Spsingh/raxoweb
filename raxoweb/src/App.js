import React from 'react';
import MainContainer from './components/MainContainer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App" id="RaxowebMain">
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
