package com.example.healthhack.controller;

import com.example.healthhack.dto.TriageRequest;
import com.example.healthhack.dto.TriageResponse;
import com.example.healthhack.service.TriageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/triage")
@CrossOrigin(origins = "*")
public class TriageController {

    @Autowired
    private TriageService triageService;

    @PostMapping
    public TriageResponse triage(@RequestBody TriageRequest req) {
        return triageService.triage(req);
    }
}
