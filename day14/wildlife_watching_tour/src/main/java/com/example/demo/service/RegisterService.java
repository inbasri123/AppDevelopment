package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.RegisterEntity;
import com.example.demo.repository.RegisterRepository;
@Service
public class RegisterService implements RegisterServiceInterface 
{
    @Autowired
    private RegisterRepository registerRepository;
    @Override
	public List<RegisterEntity> getRegister() 
	{
		return registerRepository.findAll();
	}
    @Override
	public void saveRegister(RegisterEntity registerEntity) 
	{
		registerRepository.save(registerEntity);
	}
    @Override
	public void updateRegister(RegisterEntity registerEntity) 
	{
		registerRepository.save(registerEntity);	
	}
    @Override
	public void deleteRegister(int registerId) 
	{
		registerRepository.deleteById(registerId);
	}

}