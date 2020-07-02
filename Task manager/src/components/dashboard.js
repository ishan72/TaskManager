import React from 'react';
import { Navbars } from './navs';
import { Content } from '../components/Dashboard-main/dash-content';

export const Dashboard=()=>{
    return(
        <>
            <Navbars/>
            <Content/>
        </>
    )
}