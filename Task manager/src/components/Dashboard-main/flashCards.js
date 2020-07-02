import React from 'react';

export const FlashCards=()=>{
    return(
        <>
            <div style={{display:'flex',justifyContent:'space-between',height:'15%',width:'100%',borderRadius:'5px'}}>
                <div style={{backgroundColor:'red',width:'45%'}}>p</div>
                <div style={{backgroundColor:'purple',width:'45%'}}>p</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',height:'25%',width:'100%',borderRadius:'5px'}}>
                <div style={{backgroundColor:'blue',width:'45%'}}>p</div>
                <div style={{backgroundColor:'purple',width:'45%'}}>p</div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',height:'40%',width:'100%',borderRadius:'5px'}}>
                <div style={{backgroundColor:'green',width:'45%'}}>p</div>
                <div style={{backgroundColor:'purple',width:'45%'}}>p</div>                
            </div>
        </>
    )
}