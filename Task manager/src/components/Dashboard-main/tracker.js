import React from 'react';
import '../../css/dashboard.css';
import Forests from '../../assets/image/Group 13.svg';
import {Techo,Check,Calendar,Bullseye} from '../../assets/index';

export const Tracker=()=>{
    return(
        <div className="tracker-content">
            <img src={Forests} alt="forest"/>
                    <div className='tracker-content-date'>
                        <h2>26</h2>
                        <p>FRIDAY &#x2022; 32<sup>&#xb0;</sup>C</p>
                    </div>
                    <div className="task-tracker-button">
                        <button className="task-tracker-button-1"><img src={Check} alt='' height='16px' width='16px'/>&nbsp;22 tasks today</button>
                        <button className="task-tracker-button-2"><img src={Calendar} alt='' height='16px' width='16px'/>&nbsp;3 deadlines today</button>
                    </div>
        </div>
    )
}