import React from 'react'
import useLocalStorage from './CustomHook'

export default function UseCustomHook() {

    const [name, setName] = useLocalStorage('name', '')

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
        </div>
    )
}
