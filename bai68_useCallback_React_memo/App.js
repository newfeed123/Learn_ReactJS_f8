import { useRef, useState, useEffect, memo, useCallback } from "react";
import Content from "./Content";

//----------------------------------------------------//
//bài 66: React.memo, useCallback hook
//Hooks : 
//memo -> Higher Order Component (HOC) : cpn không dùng ở bên trong, mà nó sẽ ...

//import Content from "./Content";
// function App(){
//   const [count, setCount] = useState(0)

//   const increase = () => {
//     setCount(count + 1)
//   }

//   return (
//     <div style={{padding: '10px 32px'}}>
//       <Content count={count}/>
//       <h1>{count}</h1>
//       <button onClick={increase}>Click me !</button>
//     </div>
//   )
// }

//----------------------------------------------------//
//bài 68 : useCallback hook

function App(){
  const [count, setCount] = useState(0)

  const handleIncrease = useCallback(() => {
    setCount(prevCount => prevCount + 1)
  }, [])

  return (
    <div style={{padding: '10px 32px'}}>
      <Content 
        onIncrease={handleIncrease}
      />
      <h1>{count}</h1>
    </div>
  )
}

export default App



