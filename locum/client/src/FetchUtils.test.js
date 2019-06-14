import {fetchAsyncGet} from "./FetchUtils";

describe("Fetch Utils ", () =>{


    beforeEach(() => {
        fetch.resetMocks();
    });

    it("fetchAsyncGet returns a response containing 200 OK if successful", async () => {
        fetch.mockResponseOnce(JSON.stringify({data: "12345"}));

        let result = await fetchAsyncGet("url");

        expect(result.body).toEqual("{\"data\":\"12345\"}");
        expect(result.status).toEqual(200);

        expect(fetch.mock.calls.length).toEqual(1);
        expect(fetch.mock.calls[0][0]).toEqual("url");
        expect(fetch.mock.calls[0][1]).toEqual({"headers":{"Content-Type":"application/json"}, "method": "GET"});
    });
});