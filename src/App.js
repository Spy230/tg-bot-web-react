import './App.css';
import React from 'react';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
const tg = window.Telegram.WebApp;



function  App() {
    const {onToggleButton , tg} = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])



  return (
      <div className="App">

          <button onClick={onToggleButton}>toggle</button>
      </div>
  );

}
export default App;