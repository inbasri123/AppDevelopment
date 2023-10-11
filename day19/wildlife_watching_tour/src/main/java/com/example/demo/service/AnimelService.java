package com.example.demo.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Animel;
import com.example.demo.repository.AnimelRepository;

@Service
public class AnimelService 
{
	@Autowired
	private AnimelRepository animelRepository;

	public List<Animel> getAnimel() {
		
		return animelRepository.findAll();
	}

	public void saveAnimel(Animel animel) {
		animelRepository.save(animel);
		
	}

	public void updateAnimel(Animel animel) {
		animelRepository.save(animel);
		
	}

	public void deleteAnimel(int animelId) {
		animelRepository.deleteById(animelId);
		
	}
}
