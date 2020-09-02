import React, { useState, useEffect } from "react";



function UseEffectHook() {

    console.log("component is rendereing")

    const [type, setType] = useState('Posts')

    const [error, setError] = useState('No error')

    // 1. unconditional rendeder every time, argumentbe meg kell adni egy callbacket, ami lefut, amikor ujra rendrelodik valmi akkor lefut a useEffect, es az
    // hivja meg azt amit itt definialok, pl console.log
    useEffect(() => {
        console.log("unconditional rendeder every time")
    })

    // 2. dependency, csak ha valtozik akkor fut le a callback
    useEffect(() => {
        console.log("error changed")
    }, [error])

    useEffect(() => {
        console.log("oninitnek felel meg au ures dependency")
    }, [])

    useEffect(() => {
        setType("Kutya")        // ilyet is lehet...
    }, [error])

    // 3.
    // kell hasznalni ngOndestroy kent, mert pl initkor adok egy eventlistenert, aztan atnavigalok mas komponensre, a componnes megszunik, de aez eventlistener nem
    // folyamatosan csak adodnak hozz  az eventlistenerek... es lassul...

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)    

    const handleResize = () => setWindowWidth(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)      // ez az ngOnDestroy like part
        }

    }, [windowWidth])

    return (
        <div>
          {type}
          {error}
          <br></br>
          {windowWidth}
          <div>
            {/* <button onClick={setType("Posts")}>Posts</button>      // ezt igy nem is engedi hasznalni, infinite loopba kerul, mar az elso renderelesnel, muszaj () => setType() igy megadni hogy egy anonym fiunction legyen a parameter, ami hivja a setTypot */}
            <button onClick={() => setType("Posts")}>Posts</button>
            <button onClick={() => setType("Users")}>Users</button>     
            <button onClick={function() { 
                                            // return setType("Comments")  // nem kell  a return, nem valtozott a dolog
                                            setType("Comments")
                                        } }>Comments</button>    

            <button onClick={() => setError("Error")}>Error on</button>  
            <button onClick={() => setError("No Error")}>Error off</button> 
          </div>
        </div>
      );
}


export default UseEffectHook;       // default, azaz amikor importolom, nevezhetem akarhogy a componenst, pl UseeffectooHook nak is vagy barminek.