//cho phép cung cấp store xuoogns tất cả các comp qua Context
import Context from "./Context";
import { useReducer } from "react"; //khi mà state ở phạm vi toàn cục thì sẽ có chứa nhiều state nên dùng useReducer
import reducer, { initState } from './reducer'
import logger from "./logger";

function Provider({ children }) {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    return (
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    )
}

export default Provider