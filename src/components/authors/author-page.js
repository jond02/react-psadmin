"use strict";

var React = require('react');
var AuthorActions = require('../../actions/author-actions');
var AuthorStore = require('../../stores/author-store');
var AuthorList = require('./author-list');
var Router = require('react-router');
var Link = Router.Link;

//smart component, gets the data and passes to author list
var AuthorPage = React.createClass({

    getInitialState: function(){

        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    //following three used for deleting authors where the change happens on the same page
    componentWillMount: function(){
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
        this.setState({authors: AuthorStore.getAllAuthors()});
    },
    render: function(){

        //authors property is set on authors list
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default" >Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;