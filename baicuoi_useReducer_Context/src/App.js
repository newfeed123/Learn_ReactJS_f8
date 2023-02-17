import {
  useRef,
  useState,
  useEffect,
  memo,
  useCallback,
  useMemo,
  useReducer,
  createContext,
  useContext,
} from "react";
import Content from "./Content";
import TodoApp from "./Todo";
import Content2 from "./Content2";
import "./App.css";
//1. Bài 1
// function App() {

//   const [counter, setCounter] = useState(1)

//   const handleIncrease = () => {
//     setCounter(counter + 1)
//   }

//   const [infor, setInfo] = useState({
//     name: 'Nguyen Van A',
//     age: 18,
//     address: 'Ha Noi, VN'
//   })

//   const handleUpdate = () => {
//     setInfo({
//       ...infor,
//       bio: 'yêu màu hồng' //thêm key-value mới vào trong obj cũ cần sd toán tử ... nếu ko dùng sẽ thay thế luôn obj ban đầu bằng obj có key-valu mới
//     })

//     //cách 2 là dùng callback
//     // setInfo(prev => ({
//     //   ...prev,
//     //   bio: 'yêu màu hồng'
//     // }))
//   }

//   return (
//     <div className="App" style={{padding: 20}}>
//       <h1>{counter}</h1>
//       <button onClick={handleIncrease}>Increase</button>

//       <h1>{JSON.stringify(infor)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }

// export default App;
//------------------------------------------------------------------------//

//Bài 2
//1. Random gift

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB Keyboard',
// ]

// function App() {

//   const [gift, setGift] = useState()

//   const randomGift = () => {
//     const index = Math.floor(Math.random() * gifts.length) //index ngẫu nhiên từ 0 -> 2
//     setGift(gifts[index])
//   }

//   return (
//     <div style={{padding: 29}}>
//       <h1>{gift || "Chưa có phần thưởng"}</h1>
//       <button onClick={randomGift}>Lấy thưởng</button>
//     </div>
//   );
// }

// export default App;

//2. Two-way Binding trong reacJS
//mac dinh trong reactJS : one-way binding
//mac dinh trong vueJS : two-way binding

//2.1 radio box
// function App() {

//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   console.log(name)

//   //response from API
//   const courses = [
//     {
//       id: 1,
//       name: 'HTML, CSS'
//     },
//     {
//       id: 2,
//       name: 'JavaScript'
//     },
//     {
//       id: 3,
//       name: 'PHP'
//     },
//   ]

//   const [checked, setChecked] = useState()

//   const handleSubmit = () => {
//     //call api
//     console.log({id: checked})
//   }

//   return (
//     <div style={{padding: 29}}>
//       {/* <input
//         value={name}
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={email}
//         onChange={e => setEmail(e.target.value)}
//       /> */}

//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="radio"
//             checked={checked === course.id}
//             onChange={() => setChecked(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }

// export default App;

//2.2 check box
// function App() {
//   //response from API
//   const courses = [
//     {
//       id: 1,
//       name: 'HTML, CSS'
//     },
//     {
//       id: 2,
//       name: 'JavaScript'
//     },
//     {
//       id: 3,
//       name: 'PHP'
//     },
//   ]

//   const [checked, setChecked] = useState([]) //khởi tạo arr để lưu các lựa chọn ở checkBox

//   const handleSubmit = () => {
//     //call api
//     console.log({ids: checked})
//   }

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if(isChecked){
//         //nếu đã check rồi thì bỏ check đi
//         return checked.filter(item => item !== id) //trả về mảng gồm những item ko phải là id (id là nhưng thằng đang dc chọn)
//       }
//       else{
//         return [...prev, id]
//       }

//     })
//   }

//   return (
//     <div style={{padding: 29}}>
//       {courses.map(course => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}//include trả về true nếu trong mảng checked chưa id đó
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Register</button>

//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------

//3. Bài 3: todolist useState

// function App(){
//   const [job, setJob] = useState('')
//   const storageJobs = JSON.parse(localStorage.getItem('jobs')) //chuyeern veef mangr
//   const [jobs, setJobs] = useState(storageJobs ?? [])
//   //toán tử nullish , nếu thằng đằng trc "phải là" null hoặc undifined thì nó sẽ lấy thằng đằng sau
//   //toán tử || nếu thằng đằng trc là kiểu fail, '', 0, null, ...

//   const handleSubmit = () => {
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       //save to local storage
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs
//     })
//     setJob('')
//   }

//   return (
//     <div style={{padding: 32}}>
//       <input
//         value={job}
//         onChange={e => setJob(e.target.value)}
//       />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {/* render ra ther li */}
//         {jobs.map((job, index) => (
//           <li key={index}>{job}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;

//---------------------------------------------------------------------//

//4. Bài 4+5: Mounted & Unmounted : Gắn và gỡ ra components
//5. useEffect hook
// import Content from "./Content";

// function App(){
//   const [show, setShow] = useState(false)
//   return (
//     <div style={{padding: 20}}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// export default App;

//----------------------------------------------------//
//bài 64 : useRef hook
// tác dụng : lưu các giá trị qua một tham chiếu bên ngoài function component

// function App(){
//   const [count, setCount] = useState(60)

//   const timerId = useRef()
//   const prevCount = useRef() //lấy giá trị trc đó của count

//   const h1Ref = useRef()

//   useEffect(() => {
//     //mỗi khi count thay đổi thì sẽ gọi lại cái callback này
//     prevCount.current = count
//   }, [count])

//   useEffect(() => {
//     const rect = h1Ref.current.getBoundingClientRect() //lấy tọa độ thẻ h1
//     console.log(rect);
//   })

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1)
//       //ref.current = Math.random()
//     }, 1000)
//     console.log('start -> ', timerId.current);
//   }

//   const handleStop = () => {
//     clearInterval(timerId.current)
//     console.log('stop -> ', timerId.current);
//   }

//   // const ref = useRef(99)
//   // console.log(ref.current) //99 , ref là 1 obj có key là current (mặc định) và value là 99
//   console.log(count, prevCount.current);
//   return(
//     <div style={{ padding: 20 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }

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

// function App(){
//   const [count, setCount] = useState(0)

//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount + 1)
//   }, [])

//   return (
//     <div style={{padding: '10px 32px'}}>
//       <Content
//         onIncrease={handleIncrease}
//       />
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------//
//bài 70: useMemo hook : tránh thực hiện lại 1 logic ko cần thiết
//        memo : là HOG tránh component bị re-render ko cần thiết
// function App(){
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])

//   const nameRef = useRef()

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       price: parseInt(price)
//     }])
//     //bấm add xong thì cleaer input và focus vào ô input đầu tiên
//     setName('')
//     setPrice('')
//     nameRef.current.focus()
//   }

//   console.log(products);

//   // const total = products.reduce((result, prod) => {
//   //   console.log('tính toán ....');
//   //   return result + prod.price
//   // }, 0)

//   const total = useMemo(() => {
//     const result = products.reduce((result, prod) => {
//       console.log('tính toán ....');
//       return result + prod.price
//     }, 0)

//     return result
//   }, [products])

//   //đối số 1 : callback
//   //đối số 2 : dependencies : nếu rỗng thì sẽ chỉ tính toán 1 lần, những lần re-render sau đó sẽ trả về kq tính toán từ lần trc
//   //                          nếu ko rỗng thì mỗi lần dependencies thay đổi nó sẽ tính toán lại còn dependencies ko thay đổi thì sẽ trả về kq tính toán từ lần trc
//   //bấm add thì in ra nd 2 ô input và tính tổng của các sp
//   return (
//     <div style={{padding: '10px 32px'}}>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={e => setName(e.target.value)}
//       />
//       <input
//         value={price}
//         placeholder="Enter price..."
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total: {total}
//       <ul>
//         {products.map((product, index) =>
//           (<li key={index} >{product.name} : {product.price}</li>)
//         )}
//       </ul>
//     </div>
//   )
// }

// export default App

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
// const initState = 0

// //2. Actions
// const UP_ACTION = 'up'
// const DOWN_ACTION = 'down'

// //3. Reducer: function đầu vào là cái state hiện tại và 1 action => từ 2 cái đó quyết định sate mới là gì. ví dụng actions là up thì trả về state mới +1
// const reducer = (state, action) => {
//   console.log('reducer runnning...');
//   switch (action) {
//     case UP_ACTION:
//       return state + 1
//     case DOWN_ACTION:
//       return state - 1
//     default:
//       throw new Error('Invalid action')
//   }
// }

// //4. Dispatch

// function App(){
//   const [count, dispatch] = useReducer(reducer, initState)
//   //dispatch: là 1 hành động để giúp 1 action dc kích hoạt => state thay đổi và re-render lại cpn
//   return (
//     <div style={{ padding: '0 20px' }}>
//       <h1>{count}</h1>
//       <button
//         onClick={() => dispatch(DOWN_ACTION)}
//       >
//         Down
//       </button>
//       <button
//         onClick={() => dispatch(UP_ACTION)}
//       >
//         Up
//       </button>
//     </div>
//   )
// }

// export default App

//----------------------------------------------------//
//bài74: To do APP useReducer hook
//1. Init sate:
// const initState = {
//   job: '',
//   jobs: []
// }

// //2. Actions:
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'

// const setJob = payload => {
//   //payload: dữ liệu (người dùng gõ vào input) mang theo đi
//   return {
//     type: SET_JOB,
//     payload
//   }
// }

// const addJob = payload => {
//   //payload: dữ liệu (người dùng gõ vào input) mang theo đi
//   return {
//     type: ADD_JOB,
//     payload
//   }
// }

// const deleteJob = payload => {
//   return {
//     type: DELETE_JOB,
//     payload
//   }
// }

// // console.log(setJob('rua bat'))

// //3. Reducer :
// const reducer = (state, action) => {
//   //console.log(action);
//   console.log('action:', action)
//   console.log('prev state:', state)

//   let newState

//   switch(action.type) {
//     case SET_JOB:
//       newState = {
//         ...state,
//         job: action.payload
//       }
//       break
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.payload]
//       }
//       break
//     case DELETE_JOB:
//         const newJobs = [...state.jobs]
//         newJobs.splice(action.payload, 1) //action.payload mang theo index
//         newState = {
//           ...state,
//           jobs: newJobs,
//         }
//         break
//     default:
//       throw new Error('invalid action.!')
//   }

//   console.log('new state: ', newState);

//   return newState
// }

// //4. Dispatch:
// function App(){
//   const [state, dispatch] = useReducer(reducer, initState)
//   const { job, jobs } = state
//   const inputRef = useRef()

//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob('')) //clear input
//     inputRef.current.focus() //focus input sau khi clear
//   }

//   return (
//     <div style={{ padding: '0 20px' }}>
//       <h3>To do</h3>
//       <input
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo..."
//         onChange={e => {
//           //setJob return về 1 OBJ, dispatch sẽ nhận 1 action là 1 OBJ có key: set_job và value: 'rua bat'
//           //dispatch(setJob('rua bat'))

//           dispatch(setJob(e.target.value))
//         }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <span onClick={() => dispatch(deleteJob(index))}>
//               &times;
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App

//--------------------------------------------------
//Bài 75 : useReducer recap
// function App(){
//   return <TodoApp />
// }

// export default App

//--------------------------------------------------
//bài 76: useContext
// import { ThemeContext } from "./ThemeContext";
//CompA => CompB => CompC

//1. Create context: tạo ngữ cảnh
//2. Provider: cung cấp
//3. Consumer: nhận

//Theme: Dark / Light
// function App() {
//   const context = useContext(ThemeContext)

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={context.toggleTheme}>Tooggle theme</button>
//       <Content2 />
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------
//bài78: Context + useReducer
//import { StoreContext } from "./store";
import { useStore, actions } from "./store";

function App(){

  //const state = useContext()
  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  //console.log('todo input: ', todoInput);
  const handleAdd = () => {
    dispatch(actions.addTodo(todoInput))
  }

  return (  
    <div>
      <input 
        value={todoInput}
        placeholder="Enter todo..."
        onChange={e => {
          dispatch(actions.setTodoInput(e.target.value))
        }}
      />
      <button onClick={handleAdd}>Add</button>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </div>
  )
}

export default App
