import React from 'react';
import '../../css/dashboard.css';
import { Shortcuts } from './shortcuts';
import {Tracker} from './tracker';
import { TodayTask } from './todayTask';
import { FlashCards } from './flashCards';
import { Footer } from './footer';


export const Content=()=>{
    return(
        <>
        <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
            <div className="main">
                <div style={{width:'5%'}}>
                    <Shortcuts/>
                </div>
                <div className="task-tracker">
                    <Tracker/>
                </div>
                <div className='today-task'>
                    <TodayTask/>
                </div>
                <div className='flash-cards-1'>
                    <FlashCards/>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}