package com.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.exceptions.CustomException;
import com.repository.CompaniesRepository;
import com.repository.CouponsRepository;
import com.repository.CustomersRepository;

public abstract class ClientService {

	@Autowired
	protected CompaniesRepository companiesRepo;
	
	@Autowired
	protected CustomersRepository customersRepo;
	
	@Autowired
	protected CouponsRepository couponsRepo;

	public abstract boolean login(String email, String password) throws CustomException;
}
