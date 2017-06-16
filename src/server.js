import path from 'path';
import Express from 'express';
import React from 'react';
import { Server } from 'http';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import ejs from 'ejs';


const app = new Express();
// const server = new Server(app);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(Express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile('static/index.html')
})

// app.get('/interests', (req, res) => {

// })

// app.get('/', (req, res) => {
// 	ejs.renderFile('homepage', {}, {}, function(err, str){
//     console.log(str);
//     res.render('index', { markup:str });  
//   });
	
// });

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