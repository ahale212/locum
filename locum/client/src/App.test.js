import React from 'react';
import {shallow, mount} from "enzyme";
import App from './App';
import * as ResponseUtils from './ResponseUtils'

let wrapper;

describe('App ', () => {

    beforeEach(() => {
        wrapper = shallow(<App/>);
    });

    it('renders without crashing', () => {
        expect(wrapper.find('.App').length).toEqual(1);
    });
    describe('has a component for first number ', () => {

        it('which has a value prop', () => {
            expect(wrapper.find('#firstNumber').props().value).toEqual("");
        });

        it('which has an onChange prop which changes the value when input from user', () => {
            const e = {target: {value: "100"}}
            wrapper.find("#firstNumber").simulate("change", e)
            expect(wrapper.find('#firstNumber').props().value).toEqual(100);

        });

        it('which does not set the value if a non numeric value is entered', () => {
            const e = {target: {value: "abc"}}
            wrapper.find("#firstNumber").simulate("change", e)
            expect(wrapper.find('#firstNumber').props().value).toEqual("");
        });
    });

    describe('has a component for second number ', () => {

        it('which has a value prop', () => {
            expect(wrapper.find('#secondNumber').props().value).toEqual("");
        });

        it('which has an onChange prop which changes the value when input from user', () => {
            const e = {target: {value: "30"}};
            wrapper.find("#secondNumber").simulate("change", e);
            expect(wrapper.find('#secondNumber').props().value).toEqual(30);
        });

        it('which does not set the value if a non numeric value is entered', () => {
            const e = {target: {value: "xyz"}};
            wrapper.find("#secondNumber").simulate("change", e);
            expect(wrapper.find('#secondNumber').props().value).toEqual("");

        });
    });

    describe('has a component for the answer ', () => {

        it('which gets set by the response from the api', async () => {
            wrapper = mount(<App/>);
            expect(wrapper.find('#answerLabel').text()).toEqual("?");
            const e = {target: {value: "30"}};

            ResponseUtils.returnGetResponse = jest.fn().mockReturnValueOnce(60);
            wrapper.find("#firstNumber").simulate("change", e);
            await wrapper.find("#secondNumber").simulate("change", e);

            expect(wrapper.find('#answerLabel').text()).toEqual("60");
        });

    });
});

