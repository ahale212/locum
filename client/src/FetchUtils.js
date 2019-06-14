let fetchAsyncGet = async url => {
    return await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type":"application/json"
        }
    });
};

export {fetchAsyncGet}