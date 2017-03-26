"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var AuthorActions = require('../../actions/author-actions');
var toastr = require('toastr');

//dumb component, gets data passed down to it
var AuthorList = React.createClass({

    //declare expectations for a given component
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    deleteAuthor: function(id, event){

        //debugger; //add a breakpoint in the code
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');

    },
    render: function(){

        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return (
            <div>
                <table className="table">
                    <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;