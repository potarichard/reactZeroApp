import React, { useState, useMemo, useEffect, useRef } from "react";


export default function UseRefHook() {

    const [name, setName] = useState('')
    
    // 1. use case
    const renderCount = useRef(0)

    useEffect(() => {renderCount.current = renderCount.current + 1})

    // 2. usecase
    const inputRef = useRef()                               // a useRef nem okoz ujrarenderelest, lehet hasznalni elozo allapot "elmentésére is"

    // const focus = () => inputRef.current.focus()      // de igy is mukodik

    function focus() {                               // igy is jo
        inputRef.current.focus()
        // inputRef.current.value = "asdaf"                // oke, de ez igy bug, mert a value annyi lesz de a state nem valtozik, szoval a binding (aka Hook) nem volt szerepe igy
    }

    // 3. usecase, save state

    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name                 // egy renderelessel "hatrebb van", igy lehet function komponentekben renderelesek kozt persist values.
    }, [name])

    return (
        <div>
          
          <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
            <div>   
                <div>My name was: {prevName.current}</div>
                <div>My name is: {name}</div>
                <div>Rendered {renderCount.current} times</div>
            </div>
            <button onClick={() => focus()}>Focus 1</button> 
            <button onClick={focus}>Focus 2</button>
        </div>
      );
}