"use strict";

var React = require('react');
var Router = require('react-router');
var AuthorForm = require('./author-form');
var AuthorActions = require('../../actions/author-actions');
var AuthorStore = require('../../stores/author-store');
var toastr = require('toastr');

//controller view
//control data flow down to all child components
//top level components are best place to handle state
var ManageAuthorPage = React.createClass({

    mixins: [
        Router.Navigation
    ],

    statics: {

        willTransitionFrom: function(transition, component){

            if (component.state.dirty && !confirm('Leave without saving?')){
                transition.abort();
            }
        }
    },
    getInitialState: function(){

        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            dirty: false
        };
    },
    componentWillMount: function(){

        //runs before rendering
        //rendering function won't fire twice if done here instead of componentDidMount
        var authorId = this.props.params.id; //from the path /author/id

        if (authorId){
            this.setState({author: AuthorStore.getAuthorById(authorId)});
        }
    },
    setAuthorState: function(event){

        //called every keypress in form to update state
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    authorFormIsValid: function(){

        var formIsValid = true;
        this.state.errors = {}; //clear any previous errors

        if (this.state.author.firstName.length < 2){
            this.state.errors.firstName = 'First name must be at least 2 characters';
            formIsValid = false;
        }
        if (this.state.author.lastName.length < 2){
            this.state.errors.lastName = 'Last name must be at least 2 characters';
            formIsValid = false;
        }
        //any time change state need to call setState
        this.setState({errors: this.state.errors});
        return formIsValid;
    },
    saveAuthor: function(event){
        event.preventDefault();

        if (!this.authorFormIsValid()){
            return;
        }

        if (this.state.author.id){
            AuthorActions.updateAuthor(this.state.author);
        } else {
            AuthorActions.createAuthor(this.state.author);
        }
        this.setState({dirty: false}, function(){
            toastr.success('Author saved.');
            this.transitionTo('authors');
        });

    },
    render: function(){

        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
                onSave={this.saveAuthor}
                errors={this.state.errors}
            />
        );
    }
});

module.exports = ManageAuthorPage;