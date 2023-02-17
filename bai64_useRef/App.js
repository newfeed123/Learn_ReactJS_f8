import { useState, useRef } from "react";

function App(){
  const [count, setCount] = useState(60)

  const timerId = useRef()
  const prevCount = useRef() //lấy giá trị trc đó của count

  const h1Ref = useRef()

  useEffect(() => {
    //mỗi khi count thay đổi thì sẽ gọi lại cái callback này
    prevCount.current = count
  }, [count])

  useEffect(() => {
    const rect = h1Ref.current.getBoundingClientRect() //lấy tọa độ thẻ h1
    console.log(rect);
  })

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount(prevCount => prevCount - 1)
      //ref.current = Math.random()
    }, 1000)
    console.log('start -> ', timerId.current);
  }

  const handleStop = () => {
    clearInterval(timerId.current)
    console.log('stop -> ', timerId.current);
  }

  // const ref = useRef(99)
  // console.log(ref.current) //99 , ref là 1 obj có key là current (mặc định) và value là 99
  console.log(count, prevCount.current);
  return(
    <div style={{ padding: 20 }}>
      <h1 ref={h1Ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App;
