import React, { useState } from "react";


function UseStateHook() {

    // 1.
    const [count, setCount] = useState(0)       // a lenyeg hogy ez nem csak egy init value, itt konkretan lefut a useState minden egyes rendereleskor
                                                // ugyhogy ha itt valami komplikat szamitas lenne, az minden rendereleskor lefut, holott csak intivalue!

    const incr_1 = () => 
    {
        console.log("en nem renderelodok ujra folyamatosna, haha")   // es valoban nem.
        setCount(count + 1)
        setCount(count + 1)         // nem fogja novel osszesen 2 vel, mert az elso hivas utan nicns elmentve az ertek
    }

    const incr_2 = () => setCount(val => val + 1)   

    // 2.
    const complexCalculation = () => 
    {
        console.log("lots of calculating...console.log....")
        return 101;
    }

    // const [num, setNum] = useState(complexCalculation())        // ez igy meg akkor is lefut, ha nem is a setNum ot hivom, barmilyen ujrarenderelesnel lefut

    const [num, setNum] = useState(() => complexCalculation())     // egy anonymus function (), veszi at az argumentet, es csak egyszer fut le, nem definialodik ujra minden
                                                                    // rendereleskor, nem fut le ujra, csak initvalue es kesz... egy function, ami meghivja a complexCalculation-t
    

    const incr_3 = () => setNum(val => val + 1) 

    // 3. object van ott
    const [state, setState] = useState( {num:4, color:'blue'} )     // de az a meta, hogy inkabb 2 useStatet irok egyet a num-ra, egyet a color-ra es nem kell baszodni

    const incr_4 = () => setState(obj => {
        return {num: obj.num + 1}                                   // csak az object num fieldet akarom valtoztatni, de felulirja az egesz objectet, color field null lesz
    })                                                              // class componentnel igy mukodott, hogy csak az object egy reszet valtoztattuk itt nem

    const incr_5 = () => setState(obj => {
        return {... obj, num: obj.num + 1}                          // mindent atmasol, majd amit akarok azt felulirja                    
    })


    return (
        <div>
          {count}    
          <h2>{num}</h2>
          <h2>{state.num} {state.color}</h2>
          <div>            
            <button onClick={incr_1}>Add_1</button>           {/* ezeket is anonym function callal kene betenni, mert igy minden rendernel ujradefinialodik az incr function ?
                                                                  () => incr_1, igy kene inkabb ? */}        
            <button onClick={incr_2}>Add_2</button>
            <br></br>
            <button onClick={incr_3}>Add_3</button>
            <button onClick={incr_4}>Add_4</button>
            <button onClick={incr_5}>Add_5</button>
          </div>
        </div>
      );
}

export default UseStateHook;