import React,{useContext} from 'react';
import {Ellipsis} from '../../assets/index';
import {GlobalContext} from '../../Context/GlobalState';

export const TodayTask=()=>{
    const {task} = useContext(GlobalContext);
    return(
        <div>
            <div className='today-task-header'>
                <h3>Today's Tasks</h3>
                <img src={Ellipsis} alt="" width='6px' height='24px'/>
            </div>
            <div className='today-task-complete'>
                <input type="checkbox" name='1' checked/>
                <label for="1" style={{marginLeft:'1rem', color:'black'}}>Go to the Dry cleaners</label><br/>
                <input type="checkbox" name='1' checked/>
                <label for="1" style={{marginLeft:'1rem', color:'black'}}>Clean the bedroom-top to bottom</label><br/>
                <input type="checkbox" name='1' checked/>
                <label for="1" style={{marginLeft:'1rem', color:'black'}}>Code review and team meeting</label><br/>
            </div>
            <div className='today-task-list'>
            {task.length > 0 ? (task.map(task =>(
                <>
                    <input type="checkbox" name='1'/>
                    <label for="1">{task.content}</label><br/>
                </>                
            ))):'<p>No task today</p>'}
            </div>
            <div className="today-task-button">
                <button>+ Add a new task</button>
            </div>
        </div>
    )
}