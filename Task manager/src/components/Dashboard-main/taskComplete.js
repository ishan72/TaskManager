import React from 'react';

export const TaskComplete=({task})=>{
    return(
    <>
        {/* <input type="checkbox" checked/>
        <label style={{ marginLeft: '1rem', color: 'black', opacity:'1' }}>
        {task.content}</label><br /> */}
        <li className='completedlist'>{task.content}</li>
    </>
    )
}