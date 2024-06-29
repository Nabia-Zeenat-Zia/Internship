package com.exampledemo.spring.security.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users", schema = "demo")
@Getter  // Generates getters for all fields
@Setter  // Generates setters for all non-final fields
@ToString  // Generates toString method
public class User {

    @Id
    private Long id;
    private String username;
    private String password;
    private String role;
}
