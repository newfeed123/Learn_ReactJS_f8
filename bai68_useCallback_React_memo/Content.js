import { useState, useEffect } from "react";

//bài_66 React.memo : sd memo cho cpn con thì cpn cha dùng useCallBack để tối ưu
import { memo } from 'react'

function Content({ onIncrease }){
    console.log('re-render');
    return (
        <>
            <h2>Helo ae F lol</h2>
            <button onClick={onIncrease}>Click me !</button>
        </>
    )
}

export default memo(Content);
//memo : sd toán tử === để so sánh