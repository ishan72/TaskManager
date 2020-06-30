import {useState,useEffect} from 'react';

export const useFetch=(url)=>{
    const [value,setValue]=useState({data:null,loading:true});
    useEffect(()=>{
        setValue(value=>({data:value.data,loading: true}))
        fetch(url)
            .then(x=>x.text())
            .then(y=>{
                setValue({data: y, loading:false})
            })
    },[url])
    return value;
}
