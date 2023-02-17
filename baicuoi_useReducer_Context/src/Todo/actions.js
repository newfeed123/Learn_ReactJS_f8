import {ADD_JOB, SET_JOB, DELETE_JOB} from './constans'
export const setJob = payload => {
    //payload: dữ liệu (người dùng gõ vào input) mang theo đi
    return {
      type: SET_JOB,
      payload
    }
}
  
export const addJob = payload => {
    //payload: dữ liệu (người dùng gõ vào input) mang theo đi
    return {
      type: ADD_JOB,
      payload
    }
}
  
export const deleteJob = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
}