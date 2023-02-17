import { useRef, useState, useEffect, memo, useCallback, useMemo, useReducer } from "react";
import reducer, { initState } from './reducer'
import { addJob, setJob, deleteJob} from './actions'
import logger from './logger'
//1. Init sate: 
  
//2. Actions: 
  
//3. Reducer : 

//4. Dispatch: 
  function App(){
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const { job, jobs } = state
    const inputRef = useRef()
  
    const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob('')) //clear input
      inputRef.current.focus() //focus input sau khi clear
    }
  
    return (
      <div style={{ padding: '0 20px' }}>
        <h3>To do</h3>
        <input
          ref={inputRef}
          value={job}
          placeholder="Enter todo..."
          onChange={e => {
            //setJob return về 1 OBJ, dispatch sẽ nhận 1 action là 1 OBJ có key: set_job và value: 'rua bat'
            //dispatch(setJob('rua bat')) 
  
            dispatch(setJob(e.target.value)) 
          }}
        />
        <button onClick={handleSubmit}>Add</button>
        <ul>
          {jobs.map((job, index) => (
            <li key={index}>
              {job} 
              <span onClick={() => dispatch(deleteJob(index))}>
                &times;
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  
  export default App