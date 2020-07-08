import React,{useContext} from 'react';
import {GlobalContext} from '../../Context/GlobalState';

export const TaskIncomplete=({ task })=>{
    const {doTask}=useContext(GlobalContext);
    const handleChange=()=>{
        doTask(task.id)
    }
    return(
        <>
            <input type="checkbox" checked={task.completion} onChange={handleChange}/>
            <label>{task.content}</label><br/>
        </>
    )
}