import {useState} from 'react';

export const useForm=(initialState)=>{
    const [data,setData]= useState(initialState);

    return [data,(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value
        })
    }]
}