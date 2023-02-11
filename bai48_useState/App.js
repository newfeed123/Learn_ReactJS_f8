import { useState } from "react";

//1. Bài 1
function App() {
          
  const [counter, setCounter] = useState(1)

  const handleIncrease = () => {
    setCounter(counter + 1)
  }

  const [infor, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'
  })

  const handleUpdate = () => {
    setInfo({
      ...infor,
      bio: 'yêu màu hồng' //thêm key-value mới vào trong obj cũ cần sd toán tử ... nếu ko dùng sẽ thay thế luôn obj ban đầu bằng obj có key-valu mới
    })

    //cách 2 là dùng callback
    // setInfo(prev => ({
    //   ...prev,
    //   bio: 'yêu màu hồng'
    // }))
  }

  return (
    <div className="App" style={{padding: 20}}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>

      <h1>{JSON.stringify(infor)}</h1>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default App;
