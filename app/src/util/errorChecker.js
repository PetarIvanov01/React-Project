const tryCatchErr = (err) => {
    let error = err
    if (err.name === 'TypeError' && error.message.includes('NetworkError')) {
        error =  'There was a network error. Please check if the server is running.';
    }

    console.error(error);
    return;
}

export default tryCatchErr