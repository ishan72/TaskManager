import React from 'react';
import { Cog, Plus } from '../../assets';

export const Footer=()=>{
    return(
        // <div style={{display:'flex',justifyContent:'space-between',alignContents:'center'}}>
        //     <img src={Cog} alt='' width='24px' height='24px'/>
        //     <button style={{background:'#3E64FF',borderRadius:'50px',border:'none',width:'60px',height:'60px',color:'white',fontSize:'1.5rem'}}>+</button>
        // </div>
        <div style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <div style={{width:'95%',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <ul style={{listStyle:'none'}}>
                    <li><img src={Cog} alt='' width='24px' height='24px'/></li>
                </ul>
                <button style={{background:'#3E64FF',borderRadius:'20px',border:'none',width:'60px',height:'60px',color:'white',fontSize:'1.5rem',boxShadow:'0px 15px 50px #3E64FF80'}}><img src={Plus} alt='' height='24px' width='18px'/></button>
            </div>
        </div>
    )
}