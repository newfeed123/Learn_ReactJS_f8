import {ADD_JOB, SET_JOB, DELETE_JOB} from './constans'

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    //console.log(action);
    // console.log('action:', action)
    // console.log('prev state:', state)
    
    // let newState
  
    switch(action.type) {
        case SET_JOB:
            return {
            ...state,
            job: action.payload
            }
        case ADD_JOB:
            return {
            ...state,
            jobs: [...state.jobs, action.payload]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(action.payload, 1) //action.payload mang theo index
            return {
                ...state,
                jobs: newJobs,
            }

        default:
            throw new Error('invalid action.!')
    }
  
    //console.log('new state: ', newState);
  }

export default reducer