import { useRef, useState, useEffect, memo, useCallback } from "react";
import Content from "./Content";


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



