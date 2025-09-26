package com.example.healthhack.service;

import com.example.healthhack.dto.TriageRequest;
import com.example.healthhack.dto.TriageResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TriageService {

    public TriageResponse triage(TriageRequest req) {
        List<String> symptoms = req.getSymptoms();
        if (symptoms == null || symptoms.isEmpty()) {
            return new TriageResponse("Home care", 0.6, "No symptoms provided — recommend monitoring.");
        }

        int severityScore = 0;
        for (String s : symptoms) {
            String x = s.toLowerCase();
            if (x.contains("chest") || x.contains("shortness") || x.contains("breath") || x.contains("unconscious") || x.contains("severe pain")) {
                severityScore += 5;
            } else if (x.contains("fever") && (x.contains("high") || x.contains("40") || x.contains("39"))) {
                severityScore += 4;
            } else if (x.contains("fever") || x.contains("cough") || x.contains("vomit") || x.contains("bleeding")) {
                severityScore += 2;
            } else {
                severityScore += 1;
            }
        }

        // factor age
        int age = req.getAge() == null ? 30 : req.getAge();
        if (age > 70) severityScore += 2;
        else if (age > 50) severityScore += 1;

        // map to triage
        if (severityScore >= 8) {
            return new TriageResponse("ER", 0.9, "Severe symptoms detected — recommend immediate emergency care.");
        } else if (severityScore >= 4) {
            return new TriageResponse("See GP", 0.75, "Moderate symptoms — see primary care within 24-48 hours.");
        } else {
            return new TriageResponse("Home care", 0.7, "Mild symptoms — monitor and use self-care. Seek care if worsen.");
        }
    }
}
