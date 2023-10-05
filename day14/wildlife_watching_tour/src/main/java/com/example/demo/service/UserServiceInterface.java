package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.UserEntity;

public interface UserServiceInterface 
{
	 public List<UserEntity> getUser();
	 public void saveUser(UserEntity userEntity);
	 public void updateUser(UserEntity userEntity);
	 public void deleteUser(int userId);
}