import React from 'react';
import {useForm} from '../Hooks/useForm';
import {Container,Form,Input,Label,Button,FormGroup}from 'reactstrap';

export const Login=()=>{
    const [value,handleChange]=useForm({name:'',password:''})
    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('login',JSON.stringify(value));
        console.log('success')
    }
    return(
        <Container>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="name" onChange={handleChange} placeholder="enter your name" value={value.name}/>
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" onChange={handleChange} placeholder="enter your password" name="password" value={value.password}/>
            </FormGroup>
            <Button type="submit" className="btn btn-info">Submit</Button>
        </Form>
        </Container>
    )
}