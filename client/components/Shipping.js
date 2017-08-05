import React from 'react';

import Header from './SignupComponents/header'
import Footer from './SignupComponents/footer'
import AddressForm from './SignupComponents/addressForm'
import Plans from './SignupComponents/plans'

const Shipping = ({ fieldValues, nextStep, saveValues, currentFieldCount, maxFieldsCount }) => {
    const maxValuesInShipping = 12;

	const selectPlan = (event) => {
        saveValues({plan: event.currentTarget.getAttribute('data-plan')});
        document.getElementsByClassName('planform')[0].querySelectorAll('a').forEach(function(el){el.classList.remove('roasttype-border')});
        event.currentTarget.classList.add('roasttype-border');
    }

    const editAddress = (event) => {
    	let inputName = event.currentTarget.name;
    	let address = {};
    	address[inputName] = event.currentTarget.value;
    	saveValues(address);
    }

	return (
		<div>
			<Header h1="Shipping Information" h2={<h3 className="getStartedColor">Tell us where you'd like your coffee delivered:</h3>} />
		    <AddressForm editAddress={editAddress} />
		    <Plans selectPlan={selectPlan} />
            <Footer maxFieldsCount={maxFieldsCount} currentFieldCount={currentFieldCount} 
                    maxValuesInThis={maxValuesInShipping} 
                    nextStep={nextStep} h1="Review and Pay" />
	    </div>
	)
}

export default Shipping;