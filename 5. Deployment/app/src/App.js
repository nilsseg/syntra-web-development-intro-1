import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useImage } from './useAxios';
import {useUrlPicker } from "./useUrlPicker";

function App() {
  const { selectedUrl, picker } = useUrlPicker()
  const { data, loading, error } = useImage("https://picsum.photos/id/237/200/300");

  console.log(data, loading, error);
  return (
    <div className="App">
      <header className="App-header">
      {picker}
      {(() => {
        if (!selectedUrl) return <p>YOU GOTTA SELECT YO</p>        
        if (error) return <p>OH NOOOO...</p>
        if (loading) return <p>LOADING.....</p>
        return <img src={data} className="App-logo" alt="logo"></img>;
      })()}
      </header>
    </div>
  );
}

export default App;
