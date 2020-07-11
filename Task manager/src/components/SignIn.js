import React, { useState, useContext, useEffect } from 'react';
import { useHistory ,Link } from 'react-router-dom';
import firebase from '../firebase';
import logo from '../assets/image/man.svg';
import "firebase/auth";
import { Form, Label, Input, Button, FormGroup } from 'reactstrap'
import "firebase/firestore";
import { AuthContext } from '../Context/AuthContext';
import '../css/auth.css';

export const SignIn = () => {
    const authContext = useContext(AuthContext);
    const { loadingAuthState } = useContext(AuthContext);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const db = firebase.firestore();

    useEffect(() => {
        firebase
            .auth()
            .getRedirectResult()
            .then(result => {
                if (!result || !result.user || !firebase.auth().currentUser) {
                    return;
                }

                return setUserProfile().then(() => {
                    history.push("/dashboard");
                })
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }, [])

    const setUserProfile = async () => {
        if (await isUserExists()) {
            return;
        }

        const currentUser = firebase.auth().currentUser;
        db.collection('Users')
            .doc(currentUser.uid)
            .set({
                username: currentUser.displayName
            })
            .then(() => {
                console.log('saved');
                return;
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
    }

    const isUserExists = async () => {
        const doc = await db
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .get()
        return doc.exists;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => {
                authContext.setUser(res);
                history.push('/dashboard')
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message);
            })
        setEmail('');
        setPassword('');
    }

    if (loadingAuthState) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div className="auth-content">
            <div className="auth-content-items">
                <div className="auth-content-items-text">
                    <div className="auth-content-items-header">
                        <h1>Log In</h1>
                        <p>Type your credentials and click Sign In</p>
                    </div>
                    <div className="auth-content-items-form">
                        {error !== null && <div>{error}</div>}
                        <Form className="auth-content-items-formfield" onSubmit={onSubmit}>
                            <FormGroup>
                                <Label htmlFor="email">Your Email Address<Input type="email" onChange={(e) => setEmail(e.target.value)} name="email" value={email} /></Label>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password<Input type="password" onChange={(e) => setPassword(e.target.value)} name="password" value={password} /></Label>
                            </FormGroup>
                            <div className="auth-content-items-formButton">
                                <Button type="submit">Sign In</Button>
                                <Link to='/sign-in'>Forgot Password?</Link>
                            </div>
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