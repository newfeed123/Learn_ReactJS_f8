import { useState, useEffect } from "react"

// hook này dùng khi thực hiện các side Effects (khi có 1 tác động xảy ra dẫn tới dữ liệu ctrinh thay đổi)
//kiến thức react life cycle component
/*
    sideEffect xảy ra khi
    1. updateDOM
        F8 blog title
    2. callAPI
    3. DOM events
        -scoll
        -resize
    4. Cleanup
        -remove listener/ unsubscribe
        -clear timer
        
       
    1. cú pháp : useEffect(callback, [dependencies])
        callback : bắt buộc
        [dependencies] : là 1 mảng chứa phụ thuộc vào DL, ko bắt buộc
    
    2. Có 3 TH sử dụng :
        - useEffect(callback) : 
            + gọi callback mỗi khi re-render components
            + gọi callback sau khi component thêm element vào DOM
        - useEffect(callback, []) : 
            + chỉ gọi callback 1 lần sau khi component mounted
            + nên sd khi muốn thực hiện 1 logic nào đó 1 lần sau khi component mounted
        - useEffect(callback, [dependencies])
            + dependencies : là 1 biến có thể là props, state nằm trong component
            + callback : sẽ dc gọi lại mỗi khi dependency thay đổi
        => cả trong 3 TH thì callback luôn dc gọi khi Component mounted    
    
    //--------------
    //1. Callback luôn dc gọi sau khi component mounted
    //2. Cleanup function luôn dc gọi trc khi component unmounted
*/

//.1. updateDOM: F8 blog title
// function Content(){
//     const [title, setTitle] = useState('')
    
//     useEffect(() => {
//         //thằng này sẽ dc chạy sau
//         //nó ưu tiên chỗ return tạo ta UI , sideEFFECT (side nghĩa là bên cạnh)
//         // console.log('re-render', title)
//         document.title = title
//     })

//     return(
//         <div>
//             <h1>Hi anh em F8</h1>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     )
// }

//2. callAPI

//const tabs = ['posts', 'comments', 'albums']
// function Content(){
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType] = useState('posts')

//     //phair dung TH 2, dùng TH1 thì nó gọi liên tục
//     // useEffect(() => {
//     //     fetch('https://jsonplaceholder.typicode.com/posts')
//     //         .then(res => res.json())
//     //         .then(posts => {
//     //             setPosts(posts) //sau khi setPost thì component Content dc re-render lại và posts sẽ là 1 mảng gồm 100 phẩn tử từ API
//     //         })
//     // }, [])
    
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts) //sau khi setPost thì component Content dc re-render lại và posts sẽ là 1 mảng gồm 100 phẩn tử từ API
//             })
//     }, [type])

//     return(
//         <div>

            // {tabs.map(tab => (
            //     <button 
            //         key={tab}
            //         style={type === tab ? {
            //             color: '#fff', 
            //             background: '#333'
            //         } : {}}
            //         onClick={() => setType(tab)}
            //     >
            //         {tab}
            //     </button>
            // ))}

            // <ul>
            //     {posts.map(post => (
            //         <li key={post.id}>{post.title}</li>
            //     ))}
            // </ul>
            
//         </div>
//     )
// }

const tabs = ['posts', 'comments', 'albums']
//3. DOM events
function Content(){
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [width, setWidth] = useState(window.innerWidth) //resize

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts) //sau khi setPost thì component Content dc re-render lại và posts sẽ là 1 mảng gồm 100 phẩn tử từ API
            })
    }, [type])

    //để show/hide  => cần re-render lại giao diện người dùng

    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            console.log(window.scrollY)

            if(window.scrollY >= 200){
                //show
                setShowGoToTop(true) //sau khi logic dc thực thi nó sẽ xét lại showGoToTop và Component sẽ dc re-render
            }
            else{
                //hhide
                setShowGoToTop(false)
            }

            //setShowGoToTop(window.screenY >= 2000)
        }

        window.addEventListener("scroll", handleScroll)
        console.log('addEventListener');
        //clean up function
        return () => {
            console.log('unmounting...')
            window.removeEventListener("scroll", handleScroll)
            console.log('removeEventListener');
        }
    })

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return(
        <div>

            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff', 
                        background: '#333'
                    } : {}}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}

            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20
                    }}
                >
                    Go to top
                </button>
            )}


        </div>
    )
}

export default Content