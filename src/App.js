import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComp from './components/TodoComp';
import UseStateHook from './components/useStateHook';
import UseeffectooHook from './components/useEffectHook';

function App() {
  return (
    <div className="App">
      <div>
        {/* <TodoComp/> */}
        {/* <UseStateHook/> */}
        <UseeffectooHook/>
      </div>

    </div>
  );
}

export default App;
