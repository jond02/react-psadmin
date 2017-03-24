"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (

    <Route name="app" path="/" handler={require('./app')}>
        <DefaultRoute handler={require('./components/home-page')} />
        <Route name="authors" handler={require('./components/authors/author-page')} />
        <Route name="about" handler={require('./components/about/about-page')} />
    </Route>

);

module.exports = routes;