import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    // handle email
    const handleEmailOnBlur = event => {
        setEmail(event.target.value)
    }
    
    // handle password
    const handlePasswordOnBlur = event => {
        setPassword(event.target.value)
    }
    // handle confirm password
    const handleConfirmpasswordOnBlur = event => {
        setConfirmpassword(event.target.value)
    }
    // handle email
    const handleError = event => {
        setError(event.target.value)
    }

    // go to inventory page
    if (user) {
        navigate('/inventory')
    }


    // handle create new user
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmpassword) {
            setError('First and second password does not match')
            return;
        }
        if (password.length < 6) {
            setError('At least use 6 digit password')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='login-container'>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleCreateUser} action="">
                    <div className='input-group'>
                      <label htmlFor='email'>Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" required />
                    </div>  
                    <div className='input-group'>
                      <label htmlFor='password'>Password</label>
                        <input onBlur={handlePasswordOnBlur} type="password" required />
                    </div>
                    <div className='input-group'>
                      <label htmlFor='confirm-password'>Confirm Password</label>
                        <input onBlur={handleConfirmpasswordOnBlur} type="password" required />
                    </div>
                    <p style={{ color: 'red'}}>{error}</p>
                    <button onClick={handleError} className='login-submit'>Sign Up</button>
                    <p className='move-another'>Alreday have an account? <Link to={'/login'}>Login</Link></p>
                    <div className='or-group'>
                        <p className='paragraph-border'></p>
                        <p>Or</p>
                        <p className='paragraph-border'></p>
                    </div>
                    <button className='continue-google'>
                        <img src="data:image/png;base64,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" alt="" />
                        Continue with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;