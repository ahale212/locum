import {returnGetResponse} from './ResponseUtils';

const FetchUtils = require('./FetchUtils');

describe("Response Utils ", () => {
    it("calls fetchAsyncGet with the correct params and returns the data if success", async () => {
        FetchUtils.fetchAsyncGet = jest.fn()
            .mockImplementationOnce(() => Promise.resolve({
                json: () => Promise.resolve({
                    property1: "someValue"
                })
            }));

        let result = await returnGetResponse("url")
        expect(FetchUtils.fetchAsyncGet).toHaveBeenCalledWith("url")

        expect(result).toEqual({
            property1: "someValue"
        });
    })

    it("calls fetchAsyncGet with the correct params and reutrns the data if failure", async () => {
        FetchUtils.fetchAsyncGet = jest.fn()
            .mockImplementationOnce(() => Promise.reject({
                property1: "someValue"
            }));

        let result = await returnGetResponse("url");

        expect(FetchUtils.fetchAsyncGet).toHaveBeenCalledWith("url");

        expect(result).toEqual({
            property1: "someValue"
        });
    });

});