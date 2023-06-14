import React from 'react';
import Title from '../../../../SharedPages/Title/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
import { useLocation } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_token)

const Payment = () => {
    const location = useLocation();
    const item = location.state;
    
    return (
        <div>
            <Title headers="PAYMENT HERE"></Title>

            <Elements stripe={stripePromise}>
                <CheckoutFrom data={item}></CheckoutFrom>
            </Elements>
        </div>
    );
};

export default Payment;