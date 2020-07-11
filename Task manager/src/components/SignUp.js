import React, { useState, useContext } from 'react';
import firebase from '../firebase';
import "firebase/auth";
import "firebase/firestore";
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import { Form, Label, Input, Button ,FormGroup } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../assets/image/man.svg';
import '../css/auth.css';

export const SignUp = () => {
    const authContext = useContext(AuthContext);
    const history = useHistory();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential = firebase.auth.UserCredential) => {
                authContext.setUser(userCredential);
                const db = firebase.firestore();
                db.collection("Users")
                    .doc(userCredential.user.uid)
                    .set({
                        email,
                        displayName,
                        password
                    })
                    .then(() => {
                        history.push("/sign-in")
                    })
                    .catch(error => {
                        console.log(error.message);
                        setError(error.message);
                    })
            })
        setDisplayName('');
        setEmail('');
        setPassword('');
    }
    return (
        <div className="auth-content">
            <div className="auth-content-items">
                <div className="auth-content-items-text">
                    <div className="auth-content-items-header">
                        <h1>Register</h1>
                        <p>We're so glad you decided to join the beta. Fill in the form below to get started.</p>
                    </div>
                    <div className="auth-content-items-form">
                        {error !== null && <div>{error}</div>}
                        <Form className="auth-content-items-formfield" onSubmit={onSubmit}>
                            <FormGroup>
                            <Label htmlFor="displayName">Your Full Name
                            <Input type="text" name="displayName" value={displayName} onChange={(e) => setDisplayName(e.target.value)}></Input>
                            </Label>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="email">Your Email Address
                            <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
                            </Label>
                            </FormGroup>
                            <FormGroup>
                            <Label htmlFor="password">Create Your Password
                            <Input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
                            </Label>
                            </FormGroup>
                            <div className="auth-content-items-formButton">
                                <Button type="submit">Create My Account</Button>
                                <Link to='/sign-in'>Log in Instead</Link>
                            </div>
                            <Button type="submit" style={{fontSize:'1.1rem',padding:'1em',background:'rgba(	234,67,53,0.2)', color:'#ea4335',borderRadius:'15px', marginTop:'3rem',border:'none'}}>Sign Up With Google</Button>
                        </Form>
                    </div>
                </div>
                <div className="auth-content-items-images">
                    <img src={logo} alt=""/>
                </div>
            </div>
        </div>
    )
}