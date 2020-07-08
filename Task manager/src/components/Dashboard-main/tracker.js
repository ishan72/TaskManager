import React,{useContext} from 'react';
import '../../css/dashboard.css';
import Forests from '../../assets/image/Group 13.svg';
import {Check,Calendar} from '../../assets/index';
import {GlobalContext} from '../../Context/GlobalState';

export const Tracker=()=>{
    // using Context
    const {tasks} = useContext(GlobalContext);
    const Days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];
    const Day = Days[new Date().getDay()];
    const Month = new Date().getDate();
    return(
        <div className="tracker-content">
            <img src={Forests} alt="forest"/>
                    <div className='tracker-content-date'>
                        <div style={{display:'flex',justifyContent:'center', alignContent:'center'}}>
                            <div className="months" style={{display:'flex',width:'50%', justifyContent:'space-between', alignItems:'center'}}>
                                <h2>{Month -1}</h2>
                                <h2 style={{textDecoration:'underline',textDecorationColor:'blue'}}>{Month}</h2>
                                <h2>{Month + 1}</h2>
                            </div>
                        </div>
                        <p>{Day} &#x2022; 32<sup>&#xb0;</sup>C</p>
                    </div>
                    <div className="task-tracker-button">
                        <button className="task-tracker-button-1"><img src={Check} alt='' height='16px' width='16px'/>&nbsp;{tasks.length} task today</button>
                        <button className="task-tracker-button-2"><img src={Calendar} alt='' height='16px' width='16px'/>&nbsp;3 deadlines today</button>
                    </div>
        </div>
    )
}