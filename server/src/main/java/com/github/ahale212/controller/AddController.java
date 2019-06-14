package com.github.ahale212.controller;

import org.springframework.web.bind.annotation.*;
import com.github.ahale212.service.AddService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class AddController {

   private AddService addService;

   public AddController(AddService addService) {
       this.addService = addService;
   }

    @GetMapping(value = "/add")
    public int addNumbers(@RequestParam( value="firstNumber") int firstNumber,
                          @RequestParam( value="secondNumber") int secondNumber) {
        return addService.addNumbers(firstNumber, secondNumber);
    }
}