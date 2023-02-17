import { useRef, useState, useEffect, memo, useCallback } from "react";
import Content from "./Content";

//----------------------------------------------------//
//bài 72: useReducer hook
//useReducer: những bài toán dùng useState() giải quyết dc thì dùng useReducer() cũng giải quyết được
//1 component có nhiều state và phải set lại sate nhiều thì dùng useReducer()

//nếu dùng useState() thì cần phân tích và xác định:
//1. Init sate: 0
//2. Actions: Up => state + 1 Down => state - 1

// function App(){
//   const [count, setCount] = useState(0)

//   return (
//     <div style={{ padding: '0 20px' }}>
//       <h1>{count}</h1>
//       <button
//         onClick={() => setCount(count - 1)}
//       >
//         Down
//       </button>
//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Up
//       </button>
//     </div>
//   )
// }

//nếu dùng useReducer() thì phức tạp hơn
//1. Init sate: 0
//2. Actions: Up => state + 1 Down => state - 1
//3. Reducer : là 1 function
//4. Dispatch: để kích hoạt 1 actions

//triển khai useReducer():
//1. Init sate: 0
const initState = 0

//2. Actions
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'

//3. Reducer: function đầu vào là cái state hiện tại và 1 action => từ 2 cái đó quyết định sate mới là gì. ví dụng actions là up thì trả về state mới +1
const reducer = (state, action) => {
  console.log('reducer runnning...');
  switch (action) {
    case UP_ACTION:
      return state + 1
    case DOWN_ACTION:
      return state - 1
    default:
      throw new Error('Invalid action')
  }
}

//4. Dispatch

function App(){
  const [count, dispatch] = useReducer(reducer, initState)
  //dispatch: là 1 hành động để giúp 1 action dc kích hoạt => state thay đổi và re-render lại cpn
  return (
    <div style={{ padding: '0 20px' }}>
      <h1>{count}</h1>
      <button
        onClick={() => dispatch(DOWN_ACTION)}
      >
        Down
      </button>
      <button
        onClick={() => dispatch(UP_ACTION)}
      >
        Up
      </button>
    </div>
  )
}

export default App;
