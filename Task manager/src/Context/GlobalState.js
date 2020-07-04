import React,{createContext, useReducer} from 'react';

//Initial State
const initialState={
    task:[
        {
            id:1,
            content:'Design register page',
            completion:false,
        },
        {
            id:2,
            content:'Design login page',
            completion:false,
        },
    ]
};

//Creating Context
export const GlobalContext = createContext(initialState);


//Creating Provider
export const GlobalProvider= ({children})=>{
    const [state,dispatch] = useReducer(initialState);
    return(
        <GlobalContext.Provider value={{
            task:state.task
        }}>
            {children}
        </GlobalContext.Provider>
)
}
