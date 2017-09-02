import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/SignupPage';

require('./static/vendor/bootstrap/css/bootstrap.css');
require('./static/vendor/font-awesome/css/font-awesome.min.css');
require('./static/vendor/google/gfonts.css');
require('./static/vendor/google/gfonts-2.css');
require('./static/css/grayscale.css');

ReactDOM.render(
  <Signup />, document.getElementById('signup')
)