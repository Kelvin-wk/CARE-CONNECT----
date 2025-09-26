package com.example.healthhack.controller;

import com.example.healthhack.dto.ReadmissionRequest;
import com.example.healthhack.dto.ReadmissionResponse;
import com.example.healthhack.service.ReadmissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/readmission")
@CrossOrigin(origins = "*")
public class ReadmissionController {

    @Autowired
    private ReadmissionService service;

    @PostMapping
    public ReadmissionResponse predict(@RequestBody ReadmissionRequest req) {
        return service.predict(req);
    }
}
