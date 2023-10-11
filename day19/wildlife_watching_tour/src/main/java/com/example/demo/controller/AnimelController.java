package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Animel;
import com.example.demo.service.AnimelService;

@RestController

public class AnimelController 
{
	@Autowired 
    private AnimelService animelService;
    
    @GetMapping("/getAnimel")
    public List<Animel> getAnimelDetails()
    {
    	return animelService.getAnimel();
    }
    @PostMapping("/postAnimel")
    public String postAnimleDetails(@RequestBody Animel animel)
    {
    	animelService.saveAnimel(animel);
    	return("Sucessfully saved");
    }
    @PutMapping("/putAnimel")
    public String updateAnimelDetails(@RequestBody Animel animel,@RequestParam int animelId)
    {
    	animel.setAnimelId(animelId);
   	    animelService.updateAnimel(animel);
   	    return ("Successfully Updated");
    }
    
    @DeleteMapping("/deleteAnimel")
    public String deleteAnimelDetails(@RequestParam int animelId)
    {
     animelService.deleteAnimel(animelId);
   	 return ("Successfully Deleted");
    }
}
