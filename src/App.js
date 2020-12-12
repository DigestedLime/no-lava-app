import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Main from './components/Main.js';
import React, { useState } from 'react';

function App() {
  const [currState, setCurrState] = useState('main');
  // setCurrState('main');
  function getComponent(){
    let component;
    switch(currState){
      case 'main' :
        component = <Main/>;
        break;
    }
    return component;
  }

  return (
    <div className="App">
      {getComponent()}
      {/* {currState == "main" ? <Main/>: <div />} */}


    </div>
  );
}

export default App;
