package com.example.demo.entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
@Data
public class Contactus 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int contactId;
    private String username;
    private String email;
    private String message;
}
