

// rfc   -> create boilerplate code


import React, {useState, useReducer} from 'react'

function reducer(state, action) {

    switch (action.type) {
      case 'increment':
        return {count: state.count + 1}         // object destructing happening, return the whole object, with changing the count field
      case 'decrement':
        return {count: state.count - 1}
      case 'reset':
        return {count: state.count = 0}
      case 'change-count':
        return {count: state.count + action.payload.amount}
      default:
        return state
    }
  }

export default function UseReducerHook() {

    // const [state, dispatch] = useReducer(reducer, 0)     // igy egyszerubb lenne, a reduce functionba se kene ennyit baszodni, az object destructuring-al
                                                            // de altalaban a reducer osszetettebb es objectet kell neki atadni
    const [state, dispatch] = useReducer(reducer, {count : 0})

    return (
        <>
        <span>{state.count}</span>
        <button onClick={() => dispatch({ type: 'increment' })}> + </button>
        <button onClick={() => dispatch({ type: 'decrement' })}> - </button>
        <button onClick={() => dispatch({ type: 'change-count', payload: { amount: 5 } })  }> Add 5 </button>
        <button onClick={() => dispatch({ type: 'reset' })}> Reset </button>
        </>
    )
}