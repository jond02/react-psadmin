"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/author-api');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {

    //action creator, helper method that wraps the action
    createAuthor: function(author){
        //callback or promise would be used on line below for real API
        var newAuthor = AuthorApi.saveAuthor(author);

        //dispatcher, go tell all the stores that an author was just created
        Dispatcher.dispatch({
            //action itself
            actionType: ActionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },
    updateAuthor: function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: ActionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },
    deleteAuthor: function(id){
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: ActionTypes.DELETE_AUTHOR,
            id: id
        });
    }
};

module.exports = AuthorActions;

