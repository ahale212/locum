import {fetchAsyncGet} from "./FetchUtils";

let returnGetResponse = async url => {
    return await fetchAsyncGet(url)
        .then(response => {
            return response.json();
        })
        .catch(function (error) {
            return error;
        });
};

export {returnGetResponse};