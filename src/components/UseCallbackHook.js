import React, {useState, useEffect, useCallback} from 'react'

// a lenyege ugyan az mint a memonak szinte, hogy ujra rendereleskor megvaltozik egy function vagy egy object, mert uj referenciat kap, ugye memoriaba mashova tolti
// emiatt a useeffect ujra lefuttatja, a memo tudta hogy csak akkor kell futtatni ha valtozott a memo dependency
// a memo a objectet returnoli, de a callback az egesz function, emiatt mas helyrol majd lehet hivni functionkent es lehet parametert is atadni neki
// gyakorlatilag ennyi a kulonbseg

function List({getItems}) {
    const [items, setitems] = useState([])

    console.log('just logging if List komponent rerenders...')  

    useEffect(() => {
        setitems(getItems(1))
        console.log('updating items...')        
    }, [getItems])

    return items.map(item => <div key={item}>{item}</div>)
}

export default function UseCallbackHook() {

    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)                 // ugyanaz a baj mint a memonal, hogy a themet allitom, ujrarenderelodik ez a komponenes, es 
                                                            // a getitems uj referenciat kap, emiatt a List komponent erzekeli a useffectjevel hogy megvaltozott
                                                            // az inputja a getitems ezert lefut a useffect
                                                            // megjegyzes, mivelujrarenderlodik az egesz UseCallbackHook komponens a List childrenje is ujra
                                                            // renderelodik, minden lefut benne, igaz a callback hasznalataval latja a useeffect hogy van dependency es ha az valtozik a useeffect csak akkor fut le
    // original
    // const getItems = (increment) => {
    //     return [number + increment, number + increment + 1, number + increment + 2]
    // }

    const getItems = useCallback((increment) => {
        return [number + increment, number + increment + 1, number + increment + 2]         // a memo csak a return erteket adja vissza, callback az egesz function returnoli, (increment) => {.. return.. }
    }, [number] )

    const theme = {
        backgroundColor: dark ? "green" : "red",
        text: dark? "YEAAA" : "NOOOO"
    }

    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}></input>
            <button onClick={() => setDark(theme => !theme)}>Toogle</button> 
            <List getItems={getItems}/>
        </div>
    )
}

