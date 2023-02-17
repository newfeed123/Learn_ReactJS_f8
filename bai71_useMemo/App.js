import { useRef, useState, useEffect, memo, useCallback } from "react";
import Content from "./Content";

//----------------------------------------------------//
//bài 70: useMemo hook : tránh thực hiện lại 1 logic ko cần thiết
//        memo : là HOG tránh component bị re-render ko cần thiết
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: parseInt(price),
      },
    ]);
    //bấm add xong thì cleaer input và focus vào ô input đầu tiên
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  console.log(products);

  // const total = products.reduce((result, prod) => {
  //   console.log('tính toán ....');
  //   return result + prod.price
  // }, 0)

  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      console.log("tính toán ....");
      return result + prod.price;
    }, 0);

    return result;
  }, [products]);

  //đối số 1 : callback
  //đối số 2 : dependencies : nếu rỗng thì sẽ chỉ tính toán 1 lần, những lần re-render sau đó sẽ trả về kq tính toán từ lần trc
  //                          nếu ko rỗng thì mỗi lần dependencies thay đổi nó sẽ tính toán lại còn dependencies ko thay đổi thì sẽ trả về kq tính toán từ lần trc
  //bấm add thì in ra nd 2 ô input và tính tổng của các sp
  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        ref={nameRef}
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <button onClick={handleSubmit}>Add</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} : {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
