import path from 'path';
import Express from 'express';
import React from 'react';
import sassMiddleware from 'node-sass-middleware'
import { Server } from 'http';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from './config';

// import Routes from './client/routes';
import NotFoundPage from './client/components/NotFoundPage';
import apiRouter from './server/api';
import Signup from './client/components/SignupPage.js'
import Profile from './client/components/ProfilePage.js'

const appMongoStore = new MongoStore(session);
const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'server/views'));

// MiddleWares
app.use(Express.static('./client/static'));
app.use(bodyParser.json())
app.use(sassMiddleware({
  src: path.join(__dirname, 'client/static/sass'),
  dest: path.join(__dirname, 'client/static/newcss2'),
}));
app.use(session({
  secret: 'lamslamslmid@@#$(*&^&*',
  store: new appMongoStore({url: config.mongodbUri}),
  resave: false,
  saveUninitialized: false
}));
app.use('/api', apiRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/the-coffeeswap-method', (req, res) => {
  res.render('the-coffeeswap-method');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/get-started', (req, res) => {
  res.render('get-started', {initialMarkup:renderToString(<Signup />)});
});

app.get('/profile', (req, res) => {
  res.render('profile', {initialMarkup:renderToString(<Profile />)});
});

app.get('/', (req, res) => {
	ejs.renderFile('homepage', {}, {}, function(err, str){
    console.log(str);
    res.render('index', { markup:str });
  });
	
});

// app.get('*', (req, res) => {
// 	match(
// 		{ routes, location: req.url },
// 		(err, redirectLocation, renderProps) => {
// 			if (err) {
// 				return res.status(500).send(err.message);
// 			}

// 			if (redirectLocation) {
//         		return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
//       		}

//       		let markup;
//       		if (renderProps) {
//       			markup = renderToString(<RouterContext {...renderProps}/>);
//       		} else {
//       			markup = renderToString(<NotFoundPage/>);
//       			res.status(404);
//       		}

//       		return res.render('dashboard', { markup });
// 		}
// 	)
// });

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});