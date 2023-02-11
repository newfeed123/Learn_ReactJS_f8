import { useState } from "react";

function Component() {
    const [state, setState] = useState(initState)
    //1. useState() : đầu vào ? đầu ra ? cách vận hành ntn
        /*
        - nhận đối đầu vào là 1 giá trị khởi tạo initState (chỉ dùng 1 lần trong lần đầu)
        - đầu ra của useState là 1 array [] có 2 phẩn tử
            + trong lần đầu sate sẽ nhận giá trị initState
            + phần tử số 2 trong mảng là 1 hàm setState() để set giá trị cho phần tử 1 là state
            + setState() có thể truyển callback, nhưng khi đó initSate sẽ là giá trị mà callback đó return về
            + component dc re-render sau khi setState()
            + khi setState() là thay thế hoàn toàn g.trị mới cho state, chứ ko phải là thêm
        */
}