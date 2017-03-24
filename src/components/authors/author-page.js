"use strict";

var React = require('react');
var AuthorsApi = require('../../api/author-api');
var AuthorList = require('./author-list');

//smart component, gets the data and passes to author list
var Authors = React.createClass({

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
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
});

module.exports = Authors;