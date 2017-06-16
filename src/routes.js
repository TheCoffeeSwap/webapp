import React from 'react'
import { Route, IndexRoute } from 'react-router'
// import Layout from './components/Layout';
// import IndexPage from './components/IndexPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" >
    <IndexRoute />
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;