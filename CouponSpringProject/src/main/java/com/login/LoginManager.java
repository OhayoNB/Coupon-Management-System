package com.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.exceptions.CustomException;
import com.model.ClientType;
import com.service.AdminService;
import com.service.ClientService;
import com.service.CompanyService;
import com.service.CustomerService;

@Component
@Scope("singleton")
public class LoginManager {

	@Autowired
	AdminService adminService;

	@Autowired
	CompanyService companyService;

	@Autowired
	CustomerService customerService;

	private LoginManager() {

	}

	public ClientService login(String email ,String password, ClientType clientType) throws CustomException {
		boolean boolLogin = false;
		ClientService clientService = null;
		switch (clientType) {
		case Administrator:
			clientService = adminService;
			boolLogin = clientService.login(email, password);
			break;
		case Company:
			clientService = companyService;
			boolLogin = clientService.login(email, password);
			break;
		case Customer:
			clientService = customerService;
			boolLogin = clientService.login(email, password);
			break;
		}

		if(!boolLogin)
			return null;
		else
			return clientService;
	}
}
