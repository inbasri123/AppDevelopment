package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.RegisterEntity;

public interface RegisterServiceInterface 
{

	List<RegisterEntity> getRegister();

	void saveRegister(RegisterEntity registerEntity);

	void updateRegister(RegisterEntity registerEntity);

	void deleteRegister(int registerId);

}