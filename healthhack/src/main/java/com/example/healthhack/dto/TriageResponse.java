package com.example.healthhack.dto;

public class TriageResponse {
    private String triageLevel; // "Home care", "GP", "ER"
    private double confidence; // 0..1
    private String explanation;

    public TriageResponse() {}
    public TriageResponse(String triageLevel, double confidence, String explanation) {
        this.triageLevel = triageLevel; this.confidence = confidence; this.explanation = explanation;
    }

    // getters and setters
    public String getTriageLevel() { return triageLevel; }
    public void setTriageLevel(String triageLevel) { this.triageLevel = triageLevel; }
    public double getConfidence() { return confidence; }
    public void setConfidence(double confidence) { this.confidence = confidence; }
    public String getExplanation() { return explanation; }
    public void setExplanation(String explanation) { this.explanation = explanation; }
}
