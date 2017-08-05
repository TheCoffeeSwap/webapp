import {MongoClient} from 'mongodb';
import assert from 'assert';
import config from './config';

MongoClient.connect(config.mongodbUri, (err, db) => {
	assert.equal(null, err);
	db.collection('plans').drop();
	db.collection('plans').insertMany([
	{
		name: 'monthly',
		price: '22',
		currency: 'USD',
		icon: '$'
	},
	{
		name: 'yearly',
		price: '240',
		currency: 'USD',
		icon: '$'	
	}])
		.then(()=>{db.close();});
});

