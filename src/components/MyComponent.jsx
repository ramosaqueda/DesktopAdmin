import React from 'react'
import Counter from './Counter'
const MyComponent = () => {
  return (
    <div>
        <Counter >
        {(count, increment, decrement) => (
        
        <div> 
            <h2>Contador</h2><p>Calor:{count}</p>
            <button onClick={increment}>+</button>
            <button  onClick={decrement}>-</button>
        </div> 
         )}

        </Counter>
    </div>
  )
}

export default MyComponent