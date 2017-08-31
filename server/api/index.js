import express from 'express';
import stripePackage from 'stripe';
import { MongoClient } from 'mongodb';
import assert from 'assert';
import config from '../../config';
import moment from 'moment';


let mdb;
MongoClient.connect(config.mongodbUri, (err, db) => {
	assert.equal(null, err);
	mdb = db;
});

const router = express.Router();

router.post('/chargePayment', (req, resp) => {
	const stripe = stripePackage('sk_test_7rExXpXbHKApkPKeXCONyo8F');
	console.log(req.body);
	stripe.customers.create({
    	email: req.body.token.email,
    	source: req.body.token.id
  	})
  	.then(customer =>
	    stripe.charges.create({
	      amount:50,
	      description: "Opted for plan",
	      currency: "usd",
	      customer: customer.id
	})
  	.then(charge => 
		resp.send({
			success: charge.captured,
			id: charge.id
		})
	))
});

router.post('/userSignup', (req, res) => {
	console.log(req.body);
	req.body['last_logged_in'] = moment().format();
	mdb.collection('users').insert(req.body);
	// and login here as well.
	req.session.user = user;
	res.send({
		
	})
});

export default router;