import { useState } from "react";

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
function App() {
  //response from API
  const courses = [
    {
      id: 1,
      name: 'HTML, CSS'
    },
    {
      id: 2,
      name: 'JavaScript'
    },
    {
      id: 3,
      name: 'PHP'
    },
  ]

  const [checked, setChecked] = useState([]) //khởi tạo arr để lưu các lựa chọn ở checkBox

  const handleSubmit = () => {
    //call api
    console.log({ids: checked})
  }

  const handleCheck = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if(isChecked){
        //nếu đã check rồi thì bỏ check đi
        return checked.filter(item => item !== id) //trả về mảng gồm những item ko phải là id (id là nhưng thằng đang dc chọn)
      }
      else{
        return [...prev, id]
      }

    })
  }

  return (
    <div style={{padding: 29}}>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type="checkbox"
            checked={checked.includes(course.id)}//include trả về true nếu trong mảng checked chưa id đó
            onChange={() => handleCheck(course.id)}  
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit}>Register</button>

    </div>
  );
}

export default App;

