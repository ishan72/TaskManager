import React from 'react';
import {Techo,Check,Calendar,Bullseye} from '../../assets/index';

export const Shortcuts=()=>{
    return(
        <ul className='content-icons-list'>
            <li><img src={Techo} alt="techometer"/></li>
            <li><img src={Check} alt='double-check'/></li>
            <li><img src={Calendar} alt='double-check'/></li>
            <li><img src={Bullseye} alt='double-check'/></li>
        </ul>
    )
}