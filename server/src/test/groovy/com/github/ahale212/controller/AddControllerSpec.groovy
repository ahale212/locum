package com.github.ahale212.controller

import com.github.ahale212.service.AddService
import org.springframework.http.MediaType
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import org.springframework.test.web.servlet.setup.MockMvcBuilders
import spock.lang.Specification

class AddControllerSpec extends Specification {

    AddController addController
    AddService addService = Mock(AddService)
    MockMvc mockMvc


    void setup() {
        addController = new AddController(addService)

        mockMvc = MockMvcBuilders.standaloneSetup(addController).build()
    }

    def "returns a 200 response status when api/add endpoint is called" () {

        when:

        def response = mockMvc.perform(MockMvcRequestBuilders.get("/api/add")
            .contentType(MediaType.APPLICATION_JSON)
            .param("firstNumber", "40")
            .param("secondNumber", "2")
        )

        then:
        1 * addService.addNumbers(40, 2) >> {
            42
        }

        response.andExpect(MockMvcResultMatchers.status().isOk())
    }
}