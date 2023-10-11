package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;

@Service
public class UserService implements UserServiceInterface 
{
   @Autowired
   private UserRepository  userRepository;
   @Override
   public List<UserEntity> getUser()
   {
	   return userRepository.findAll();
   }
   @Override
   public void saveUser(UserEntity userEntity) 
   {
	
	  userRepository.save(userEntity);
   }
   @Override
   public void updateUser(UserEntity userEntity) 
   {
	   userRepository.save(userEntity);
   }
   @Override
   public void deleteUser(int userId)
   {
	   userRepository.deleteById(userId);
   }
}