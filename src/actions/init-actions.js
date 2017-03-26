"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var AuthorAPi = require('../api/author-api');

var InitActions = {

    initApp: function(){
        Dispatcher.dispatch({
            actionType: ActionTypes.INIT,
            initData: {
                authors: AuthorAPi.getAllAuthors()
            }
        });
    }
};

module.exports = InitActions;

