"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (

    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/home-page')} />
        <Route name="authors" handler={require('./components/authors/author-page')} />
        <Route name="about" handler={require('./components/about/about-page')} />
        <NotFoundRoute handler={require('./components/not-found-page')} />
        <Redirect from="about-us" to="about"/>
        <Redirect from="about/*" to="about"/>
    </Route>
);

module.exports = routes;