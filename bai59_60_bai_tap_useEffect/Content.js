import { useState, useEffect } from "react"

//------------------------------------------------------------------------------------//
//bài 69. App timmer sd useEffect with timer functions
// function Content(){

//     const [countdown, setCountdown] = useState(180)

//     useEffect(() => {
//         const timeId = setInterval(() => {
//             setCountdown(prevState => prevState - 1)
//         }, 1000)

//         return () => clearInterval(timeId)
//     }, [])

//     return (
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
// }

//bài 70 : useEffect with preview avatar
function Content(){
    // const [count, setCount] = useState(1)

    // useEffect(() => {
    //     console.log(`Mounted or Re-render lần ${count}`)

    //     //clean up func
    //     return () => {
    //         console.log(`Cleanup lần ${count}`);
    //     }
    // }, [count])
    

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={() => setCount(count + 1)}>
    //             Click me!
    //         </button>
    //     </div>
    // )
    // //khi bấm nút click me => setCount() => re-render lại component và count dc thăng lên 1 số
    // //count lại là dependencies của useEffect => mỗi khi count tăng lên thì call back trong useEffect sẽ dc gọi nhưng cleanup chưa chạy ngay mà chạy ở lần sau đó
    
    const [avatar, setAvatar] = useState()

    useEffect(() => {

        //cleanup
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file);
        setAvatar(file)
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAvatar}
            />
            {avatar && (
                <img src={avatar.preview} alt="" width="80%" />
            )}
        </div>
    )
}


export default Content