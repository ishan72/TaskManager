import React, { useState, useEffect, useRef } from 'react';
import {
    Container,Button,Form,FormGroup,Label,Input
}from 'reactstrap';
import {useFetch} from '../Hooks/useFetch';
import {useForm} from '../Hooks/useForm';
import {Hello} from '../Hooks/hello';

export const Forms=()=>{
    const [value,handleChange]=useForm({name:'',college:''});
    const [count,setCount] =useState(()=>JSON.parse(localStorage.getItem("count")));
    const url = `http://numbersapi.com/${count}/trivia`;
    const {data,loading} = useFetch(url);

    const [showHello,setShowHello] = useState(true);

    useEffect(()=>{
        localStorage.setItem("count",JSON.stringify(count));
    },[count])

    const inputRef = useRef(null);
    return(
        <Container>
            <p>{!data ? '...wait': data}</p>
            <h2>number:{count}</h2>
            <Button onClick={()=>setCount(c=> c+1)}>Change</Button>
            <div style={{marginTop:'5em'}}>
                <Button onClick={()=>setShowHello(!showHello)}>toggle</Button>
                {showHello && <Hello/>}
            </div>
            <div className="" style={{marginTop:'2em'}}>
                <Form style={{padding:'2em'}}>
                    <FormGroup>
                        <Label style={{marginBottom:0}}>Name</Label>
                        <Input style={{marginBottom:'2em'}} type="text" name="name" onChange={handleChange} value={value.name}/>
                        <Label style={{marginBottom:0}}>College</Label>
                        <Input ref={inputRef} type="text" name="college" onChange={handleChange} value={value.college}/>
                    </FormGroup>
                    <Button onClick={()=>{
                        inputRef.current.focus()
                    }} className="btn bg-danger">Submit</Button>
                </Form>
            </div>
        </Container>
    )
}