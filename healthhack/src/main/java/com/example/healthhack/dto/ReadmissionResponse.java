package com.example.healthhack.dto;

public class ReadmissionResponse {
    private double riskScore; // 0..1
    private String riskBucket; // Low, Medium, High
    private String explanation;

    public ReadmissionResponse() {}
    public ReadmissionResponse(double riskScore, String riskBucket, String explanation) {
        this.riskScore = riskScore; this.riskBucket = riskBucket; this.explanation = explanation;
    }

    // getters & setters
    public double getRiskScore() { return riskScore; }
    public void setRiskScore(double riskScore) { this.riskScore = riskScore; }
    public String getRiskBucket() { return riskBucket; }
    public void setRiskBucket(String riskBucket) { this.riskBucket = riskBucket; }
    public String getExplanation() { return explanation; }
    public void setExplanation(String explanation) { this.explanation = explanation; }
}
