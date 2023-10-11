package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.UserEntity;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin
public class UserController 
{
     @Autowired
     private UserService userService;
     
     @GetMapping("/getUser")
     public List<UserEntity> getUserDetails()
     {
    	 return userService.getUser();
     }
     
     
     @PostMapping("/postUser")
     public String saveUserDetails(@RequestBody UserEntity userEntity)
     {
    	 userService.saveUser(userEntity);
    	 return ("SUccessfully saved");
     }
     @PutMapping("/putUser")
     public String updateUserDetails(@RequestBody UserEntity userEntity,@RequestParam int userId)
     {
    	 userEntity.setUserId(userId);
    	 userService.updateUser(userEntity);
    	 return ("Successfully Updated");
     }
     
     @DeleteMapping("/deleteUser")
     public String deleteUserDetails(@RequestParam int userId)
     {
    	 userService.deleteUser(userId);
    	 return ("Successfully Deleted");
     }
}
    