"use strict";

var React = require('react');
var AuthorForm = require('./author-form');

//controller view
//top level components are best place to handle state
var ManageAuthorPage = React.createClass({

    getInitialState: function(){

        return {
            author: {id: '', firstName: '', lastName: ''}
        };
    },
    setAuthorState: function(event){

        //called every keypress in form to update state
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    render: function(){

        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
            />
        );
    }
});

module.exports = ManageAuthorPage;