package com.example.healthhack.service;

import com.example.healthhack.dto.ReadmissionRequest;
import com.example.healthhack.dto.ReadmissionResponse;
import org.springframework.stereotype.Service;

@Service
public class ReadmissionService {

    // Simple logistic model with example coefficients (toy demo).
    // risk = sigmoid(w0 + w1*age + w2*los + w3*comorbidity + w4*prior + w5*dischargeScore)
    private double sigmoid(double x) {
        return 1.0 / (1.0 + Math.exp(-x));
    }

    public ReadmissionResponse predict(ReadmissionRequest r) {
        double w0 = -3.0;
        double w1 = 0.02;   // age
        double w2 = 0.12;   // length of stay (days)
        double w3 = 0.6;    // comorbidity count
        double w4 = 0.9;    // prior admissions
        double w5 = -1.5;   // dischargeConditionScore (higher = healthier => lowers risk)

        double linear = w0
                + w1 * r.getAge()
                + w2 * r.getLengthOfStay()
                + w3 * r.getComorbidityCount()
                + w4 * r.getPriorAdmissions()
                + w5 * r.getDischargeConditionScore();

        double score = sigmoid(linear); // 0..1

        String bucket;
        if (score >= 0.7) bucket = "High";
        else if (score >= 0.35) bucket = "Medium";
        else bucket = "Low";

        String explanation = String.format("Score computed with simple logistic model. age= %d, los=%d, comorbid=%d, prior=%d, discharge=%.2f",
                r.getAge(), r.getLengthOfStay(), r.getComorbidityCount(), r.getPriorAdmissions(), r.getDischargeConditionScore());

        return new ReadmissionResponse(score, bucket, explanation);
    }
}
