import React from 'react';
import MainContainer from "./MainContainer";
import "./App.css";

function App(){
  return(
    <div className="app">
      <div className="title">
          <h1>Twitter</h1>
          <p>Created by VladRafli</p>
      </div>
      <MainContainer />
    </div>
  );
}

export default App;