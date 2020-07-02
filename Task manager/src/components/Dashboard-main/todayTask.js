import React from 'react';
import {Ellipsis} from '../../assets/index';

export const TodayTask=()=>{
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
                <input type="checkbox" name='1'/>
                <label for="1">Go to the Dry cleaners</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">Learn to Cook pasta</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">work from home-east river slide client</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">check out the valorant game with the bois</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">Release developer life icon pack</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1" style={{marginLeft:'1rem', color:'black'}}>look for an awesome leather chair for father's day</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">Release developer life icon pack</label><br/>
                <input type="checkbox" name='1'/>
                <label for="1">Release developer life icon pack</label><br/>
            </div>
            <div className="today-task-button">
                <button>+ Add a new task</button>
            </div>
        </div>
    )
}