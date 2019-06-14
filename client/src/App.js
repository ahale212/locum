import React, {useState, useEffect} from 'react';
import './App.css';
import {returnGetResponse} from "./ResponseUtils";

function App() {

    const numbersOnlyRegex = /^[0-9]*$/g;

    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [answer, setAnswer] = useState('?');

    const handleFirstNumberChange = value => {
        if (value.match(numbersOnlyRegex)) {
            setFirstNumber(value ? parseInt(value) : "");
        }
    };

    const handleSecondNumberChange = value => {
        if (value.match(numbersOnlyRegex)) {
            setSecondNumber(value ? parseInt(value) : "");
        }
    };

    useEffect(() => {
        calculate();
    });
    const calculate = async () => {
        if (firstNumber !== "" && secondNumber !== "") {
            const url = "http://localhost:8080/api/add?firstNumber=" + firstNumber + "&secondNumber=" + secondNumber;
            const response = await returnGetResponse(url);
            setAnswer(response);

        } else {
            setAnswer("?");
        }
    };

    return (
        <div className="App">
            <div>
                <span>
            <input id={"firstNumber"}
                   type="text"
                   value={firstNumber}
                   onChange={e => {
                       handleFirstNumberChange(e.target.value)
                   }}
            />
        </span>
                <span> + </span>
                <span>
            <input id={"secondNumber"}
                   type="text"
                   value={secondNumber}
                   onChange={e => {
                       handleSecondNumberChange(e.target.value)
                   }}
            />
        </span>
                <span> = </span>
                <span>
            <label id={"answerLabel"}>{answer}</label>
        </span>
            </div>
        </div>
    );
}

export default App;
