package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="user")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class UserEntity 
{
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private int userId;
   private String userName;
   private String password;
   public int getUserId() 
   {
	return userId;
   }
   public void setUserId(int userId) 
   {
	this.userId = userId;
   }
   public String getUserName() 
   {
	return userName;
   }
   public void setUserName(String userName) 
   {
	this.userName = userName;
   }
   public String getPassword() 
   {
	return password;
   }
   public void setPassword(String password) 
   {
	this.password = password;
   }
   
   
}