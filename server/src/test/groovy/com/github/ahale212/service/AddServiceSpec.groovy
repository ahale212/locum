package com.github.ahale212.service

import spock.lang.Specification
import spock.lang.Unroll

class AddServiceSpec extends Specification {

    AddService addService

    void setup() {

        addService = new AddService()
    }

    @Unroll
    def "when addNumbers is called, will sum the two numbers supplied and return the result"() {

        when:
        def result = addService.addNumbers(firstNumber, secondNumber)

        then:

        result == expectedResult

        where:

        firstNumber | secondNumber | expectedResult
        1         | 1         | 2
        2         | 7         | 9
        100       | 23        | 123
    }
}