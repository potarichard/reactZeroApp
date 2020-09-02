import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoComp from './components/TodoComp';
import UseStateHook from './components/useStateHook';
import UseeffectooHook from './components/useEffectHook';
import UseMemoHook from './components/useMemoHook';
import UseRefHook from './components/UseRefHook';
import UseContextHook from './components/UseContextHook';
import UseContextHook2 from './components/UseContextHook2';
import UseReducerHook from './components/UseReducerHook';
import UseCallbackHook from './components/UseCallbackHook';
import UseCustomHook from './components/UseCustomHook';

function slowFunction() {
  console.log("slowing main app")
  // for(let i=0; i<1000000000; i++);    // kb 1.5 s
}

export const ThemeContext = React.createContext()     // amiket ebbe beagyazunk ott elerheto globalisan az adott valtozo/object akarmi

function App() {

  slowFunction()      // mivel csak az egyes komponensekbe lesz valtozas igy amikor az ujrarenderelodik, attol a parent nem fog ujrarenderelodni, ezzel sprol idot a react

  const [darkTheme, setDarkTheme] = useState(true)

  function toggleDarkTheme() {
    setDarkTheme(theme => !theme)
  }

  return (
    <div className="App">
      <div>
        {/* <TodoComp/> */}
        {/* <UseStateHook/> */}
        {/* <UseeffectooHook/> */}
        {/* <UseMemoHook/> */}
        {/* <UseRefHook/> */}
        
        {/* global state */}
        {/* <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>                 
          <button onClick={toggleDarkTheme}>Toggle</button> 
          <UseContextHook/>
          <br></br>
          <UseContextHook2/>
        </ThemeContext.Provider> */}

        {/* <UseReducerHook/> */}
        {/* <UseCallbackHook/> */}
        <UseCustomHook/>

      </div>

    </div>
  );
}

export default App;
