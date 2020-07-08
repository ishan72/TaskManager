import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State
const initialState={
    tasks:[
        {
            id:1,
            content:'Design register page',
            completion:false,
        },
        {
            id:2,
            content:'Design login page',
            completion:true,
        },
    ]
};

//Creating Context
export const GlobalContext = createContext();


//Creating Provider
export const GlobalProvider= ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //actions
    const addTask=(task)=>{
        dispatch({
            type:'ADD_TASK',
            payload: task
        })
    }

    const doTask= id =>{
        dispatch({
            type:'DO_TASK',
            payload: { id }
        })
    }

    return(
        <GlobalContext.Provider value={{
            tasks:state.tasks,
            addTask,
            doTask
        }}>
            {children}
        </GlobalContext.Provider>
)
}
