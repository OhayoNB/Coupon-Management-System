package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.exceptions.CustomException;
import com.jwt.AuthenticationRequest;
import com.login.LoginManager;

public abstract class ClientController {

	@Autowired
	protected LoginManager loginManager;

	public abstract ResponseEntity<?> login(AuthenticationRequest authenticationRequest) throws CustomException;	
}
