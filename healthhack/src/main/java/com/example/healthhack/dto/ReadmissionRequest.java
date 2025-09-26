package com.example.healthhack.dto;

public class ReadmissionRequest {
    private int age;
    private int lengthOfStay; // days
    private int comorbidityCount;
    private int priorAdmissions; // past year
    private double dischargeConditionScore; // 0..1 (1 = very healthy)

    // getters & setters
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public int getLengthOfStay() { return lengthOfStay; }
    public void setLengthOfStay(int lengthOfStay) { this.lengthOfStay = lengthOfStay; }
    public int getComorbidityCount() { return comorbidityCount; }
    public void setComorbidityCount(int comorbidityCount) { this.comorbidityCount = comorbidityCount; }
    public int getPriorAdmissions() { return priorAdmissions; }
    public void setPriorAdmissions(int priorAdmissions) { this.priorAdmissions = priorAdmissions; }
    public double getDischargeConditionScore() { return dischargeConditionScore; }
    public void setDischargeConditionScore(double dischargeConditionScore) { this.dischargeConditionScore = dischargeConditionScore; }
}

