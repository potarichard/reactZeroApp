import React, { useState, useMemo, useEffect } from "react";

function slowFunction(count) {
    console.log("slowing UseMemoHook component")
    for(let i=0; i<1000000000; i++);
    return count+count
}

export default function UseMemoHook() {

    const [count, setCount] = useState(0)
    const [dark, setDark] = useState(false)         
    const theme = useMemo(() => 
    { 
        return  {
            backgroundColor: dark ? "green" : "red",
            text: dark? "YEAAA" : "NOOOO"
        }
    }, [dark] );

    // const doubleNumber = slowFunction(count)        // ez a slow function akkor is lefut, ha az input nem valtozik (count), ha ugye megbyomom a dark gombot akkor csak a textet akarom valtoztatni
                                                    // de az egesz componens ujrarenderelodik, es lefut a slow function
                                                    // ugye jo mert nem az egesz page renderelodik ujra, csak ez a "kis" componens, ugye angularnal is igy van

    const doubleNumber = useMemo(() => slowFunction(count), [count])    // igy atirva a slowfunction csak ujrarenderelesnel tenyleg csak akkor fut le, ha
                                                                        // input valtozik, aki valtoztatja a countot az lassitja a rendereles, aki nem az nem
                                                                        // lassitja az ujrarenderelest


    // meg egy eset

    // ez volt az alap theme , memo nelkul ...
    // const theme = {
    //         backgroundColor: dark ? "green" : "red",
    //         text: dark? "YEAAA" : "NOOOO"
    //     }

    useEffect(() => console.log("theme changed"), [theme])              // ha nincs memo a theme-n, ez akkor is lefut ha valmi mas rendereli ujra a componnest
                                                                        // mert ujra lefut a componnesn function ugye, es minden ami itt van lefut es
                                                                        // mivel a theme egy object, igy uj erteket kap, azaz uj object szuletik, uj memoriacimen
                                                                        // ergo "megvaltozott a theme" ezert fut le a useeffectje!

    return (
        <div>
          
          <input type="number" value={count} onChange={e => setCount(parseInt(e.target.value))}></input>
          <div>            
            <button onClick={() => setDark(theme => !theme)}>dark</button>    
            <div style={theme}>{theme.text}</div>
          </div>
          <h1>{doubleNumber}</h1>
        </div>
      );
}
