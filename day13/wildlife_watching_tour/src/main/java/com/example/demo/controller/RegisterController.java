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

import com.example.demo.entity.RegisterEntity;
import com.example.demo.service.RegisterService;

@RestController
@CrossOrigin
public class RegisterController 
{
    @Autowired
    private RegisterService registerService;
    
    @GetMapping("/getRegister")
    public List<RegisterEntity> getRegisterDetails()
    {
   	 return registerService.getRegister();
    }
    
    @PostMapping("/postRegister")
    public String saveRegisterDetails(@RequestBody RegisterEntity registerEntity)
    {
      registerService.saveRegister(registerEntity);
   	  return ("SUccessfully saved");
    }
    
    @PutMapping("/putRegister")
    public String updateRegisterDetails(@RequestBody RegisterEntity registerEntity,@RequestParam int registerId)
    {
    	registerEntity.setRegisterId(registerId);
   	    registerService.updateRegister(registerEntity);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteRegister")
    public String deleteRegisterDetails(@RequestParam int registerId)
    {
     registerService.deleteRegister(registerId);
   	 return ("Successfully Deleted");
    }
}