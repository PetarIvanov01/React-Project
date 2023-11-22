const tryCatchErr = (err) => {
    
    let error = {
        type: err.name || err.type,
        message: err.message
    }
    if (err.name === 'TypeError' && error.message.includes('NetworkError')) {
        error.type = 'ServerError';
        error.message = 'There was a network error. Please check if the server is running.';
    }
    else if (err.type === 'TokenExpiredError') {
        error.type = 'TokenExpiredError';
        error.message = 'JWT Token has expired. Please log in again to obtain a new token.';
    }
    else if (err.type === 'Error' && err.message.includes('Authorized')) {
        error.type = 'NotAuthorized';
        error.message = 'You are not authorized to perform this action. Please make sure you have the necessary permissions or contact support for assistance.';
    }


    return error;
}

export default tryCatchErr