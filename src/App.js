import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComp from './components/TodoComp';
import UseStateHook from './components/useStateHook';
import UseeffectooHook from './components/useEffectHook';
import UseMemoHook from './components/useMemoHook';
import UseRefHook from './components/UseRefHook';

function slowFunction() {
  console.log("slowing main app")
  for(let i=0; i<1000000000; i++);
}

function App() {

  slowFunction()      // mivel csak az egyes komponensekbe lesz valtozas igy amikor az ujrarenderelodik, attol a parent nem fog ujrarenderelodni, ezzel sprol idot a react

  return (
    <div className="App">
      <div>
        {/* <TodoComp/> */}
        {/* <UseStateHook/> */}
        {/* <UseeffectooHook/> */}
        {/* <UseMemoHook/> */}
        <UseRefHook/>
      </div>

    </div>
  );
}

export default App;
