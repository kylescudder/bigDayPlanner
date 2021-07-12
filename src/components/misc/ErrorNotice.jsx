import React from 'react';

function ErrorNotice (props) {
    return (
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <span>{props.message}</span>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.clearError}>
              <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default ErrorNotice;