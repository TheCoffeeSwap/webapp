import React from 'react';
import axios from 'axios'

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import CreditCardForm from './SignupComponents/cardDetails'


const PaymentForm = ({ fieldValues, nextStep, saveValues, prevStep }) => {
	const payAndSignup = (token) => {
        axios.post('/api/chargePayment', {token: token})
            .then((success) => {
                console.log(success);
                fieldValues = saveValues({'charge_id': success.data.id});
                axios.post('/api/userSignup', fieldValues)
                    .then((success) => {
                        window.location = '/profile';
                    })
            })
    }

	return (
		<div>
			<Header h1="Payment Information" h2={<h3 className="getStartedColor">Last step! Confirm your purchase</h3>} />
		    <CreditCardForm payAndSignup={payAndSignup} />
	    </div>
	)
}

export default PaymentForm;