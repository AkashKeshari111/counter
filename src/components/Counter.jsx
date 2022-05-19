import React from 'react'

const Counter = () => {

    const [count,setCount]=React.useState(0)
 
  return (

      <div>
        <h3>counter: {count}</h3>
        <button onClick={()=>{setCount(count+1 )
        console.log(count+1)
        }}>Increment</button>

        <button onClick={()=>{
            if(count>0){
                setCount(count-1)
                console.log(count-1)
            }
        }}>Decrement</button>
     

      </div>
   


  )
}

export default Counter;