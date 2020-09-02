import React, {useContext, useState} from 'react'
import {ThemeContext} from '../App'

// look Ben Adward example, thats better
export default function UseContextHook() {

    // muszaj ez a nev, mert igy jon a contextbol
    const {darkTheme, setDarkTheme} = useContext(ThemeContext)          // "elmentem magamnak" a globalis contex valuet ami jelen esetben egy boolean
                                                        // egyelore a main App bol valtoztatom az erteket, de innen is lehetne
    

    const themeStyles = {        
            backgroundColor: darkTheme ? '#333' : '#ccc',
            color: darkTheme ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem'
    }

    return (        
        <div>
            <div style={themeStyles}>Function Theme 1</div>
            <button onClick={() => setDarkTheme(val => !val)}>Toggle</button>
            {/* rz a click globalisan valtoztatja szal a hook 2 ben is lathato lesz a valtozas*/}
        </div>
      )
}