package com.example.healthhack.dto;

import java.util.List;

public class TriageRequest {
    private Integer age;
    private String gender;
    private List<String> symptoms;

    // getters and setters
    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }
    public String getGender() { return gender; }
    public void setGender(String gender) { this.gender = gender; }
    public List<String> getSymptoms() { return symptoms; }
    public void setSymptoms(List<String> symptoms) { this.symptoms = symptoms; }
}
