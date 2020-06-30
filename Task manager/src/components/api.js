import React,{useState,useEffect} from 'react';


export const Api=()=>{
    const [info,setInfo] = useState('');
    const url = 'https://api.adviceslip.com/advice';
    const handleAlert =()=>{
            fetch(url)
            .then((res)=> res.json())
            .then((data)=>{
                const {advice} = data.slip;
                setInfo(advice);
            })
    }
    useEffect(()=>{
        handleAlert()
    })
    return(
        <div>
            <p>{info}</p>
            <button onClick={handleAlert}>Click</button>
        </div>
    )
}