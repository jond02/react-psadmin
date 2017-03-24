"use strict";

var React = require('react');
var AuthorsApi = require('../../api/author-api');
var AuthorList = require('./author-list');
var Router = require('react-router');
var Link = Router.Link;

//smart component, gets the data and passes to author list
var AuthorPage = React.createClass({

    getInitialState: function(){

        return {
            authors: []
        };
    },

    componentDidMount: function(){
        if (this.isMounted()){
            this.setState({ authors: AuthorsApi.getAllAuthors() });
        }
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