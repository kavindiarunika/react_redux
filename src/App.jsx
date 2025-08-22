import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {

  const number =useSelector(store=>store.number);
  const dispatch = useDispatch()
  console.log(number);


  return (
    <div>
      {number}

      <div>
        <button onClick={()=>{dispatch({
                   type:"increment",
                  data:7
        }
         

        )}}>increse</button>
        <button onClick={()=>{
          dispatch({
            type:"descriment",
            data:7
          })
        }}>discrese</button>
      </div>
    </div>
  )
}
