package com.github.ahale212.service;

import org.springframework.stereotype.Service;

@Service
public class AddService {

    public int addNumbers(int firstNumber, int secondNumber) {
        return firstNumber + secondNumber;
    }
}
