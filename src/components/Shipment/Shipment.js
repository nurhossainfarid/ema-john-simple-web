import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    
    // handle name
    const handleNameOnBlur = event => {
        setName(event.target.value)
    }
    // handle address
    const handleAddressOnBlur = event => {
        setAddress(event.target.value)
    }

    // handle phone
    const handlePhoneOnBlur = event => {
        setPhone(event.target.value)
    }

    // handle email
    const handleError = event => {
        setError(event.target.value)
    }

    // handle add to shipping cart
    const handleAddToShipping = event => {
        event.preventDefault();
        const shipping = { name, address, phone, email };
        console.log(shipping);
    }


    return (
        <div className='login-container'>
            <div>
                <h1>Shipping Information</h1>
                <form onSubmit={handleAddToShipping} action="">
                    <div className='input-group'>
                        <label htmlFor='name'>Your Name</label>
                        <input onBlur={handleNameOnBlur} type="text" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='email'>Your Email</label>
                        <input value={user?.email} readOnly type="email" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='address'>Address</label>
                        <input onBlur={handleAddressOnBlur} type="text" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor='phone'>Phone</label>
                        <input onBlur={handlePhoneOnBlur} type="phone" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <button onClick={handleError} className='login-submit'>Add Shipping</button>
                </form>
            </div>
        </div>
    )
}
export default Shipment;