import React, { useState, useCallback } from 'react';

import Buttons1 from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showPara, setShowPara] = useState(false);
  const toggleParaHandler = useCallback(() => {
    setShowPara(!showPara);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showPara && <p>Hii Tulesh</p>} */}
      <DemoOutput show={showPara}></DemoOutput>
      <Buttons1 onClick={toggleParaHandler}>
        Toogle
      </Buttons1>
    </div>
  );
}

export default App;
