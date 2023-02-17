import { useRef, useState, useEffect, memo, useCallback } from "react";
import Content from "./Content";

//----------------------------------------------------//
//bài74: To do APP useReducer hook
//1. Init sate:
const initState = {
  job: "",
  jobs: [],
};

//2. Actions:
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  //payload: dữ liệu (người dùng gõ vào input) mang theo đi
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  //payload: dữ liệu (người dùng gõ vào input) mang theo đi
  return {
    type: ADD_JOB,
    payload,
  };
};

const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// console.log(setJob('rua bat'))

//3. Reducer :
const reducer = (state, action) => {
  //console.log(action);
  console.log("action:", action);
  console.log("prev state:", state);

  let newState;

  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload,
      };
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1); //action.payload mang theo index
      newState = {
        ...state,
        jobs: newJobs,
      };
      break;
    default:
      throw new Error("invalid action.!");
  }

  console.log("new state: ", newState);

  return newState;
};

//4. Dispatch:
function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob("")); //clear input
    inputRef.current.focus(); //focus input sau khi clear
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>To do</h3>
      <input
        ref={inputRef}
        value={job}
        placeholder="Enter todo..."
        onChange={(e) => {
          //setJob return về 1 OBJ, dispatch sẽ nhận 1 action là 1 OBJ có key: set_job và value: 'rua bat'
          //dispatch(setJob('rua bat'))

          dispatch(setJob(e.target.value));
        }}
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
