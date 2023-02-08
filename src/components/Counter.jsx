import {useState} from 'react'

const Counter = ( {children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((c) => c + 1);
    }

    const decrement = () => {
        setCount((c) => c - 1);
    }

  return (
    <div>Counter 
         
        {children (count, increment, decrement)}
        
    </div>
  )
}

export default Counter