package com.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exceptions.CustomException;
import com.jwt.AuthenticationRequest;
import com.jwt.AuthenticationResponse;
import com.jwt.JwtUtils;
import com.model.ClientType;
import com.model.Company;
import com.model.Customer;
import com.service.AdminService;

@CrossOrigin
@RestController
@RequestMapping ("/admin")
public class AdminController extends ClientController {

	@Autowired
	private JwtUtils jwtUtils;

	private AdminService adminService;


	public AdminController() {

	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws CustomException {
		adminService = (AdminService) loginManager.login(authenticationRequest.getEmail(), authenticationRequest.getPassword(), ClientType.Administrator);
		if(adminService != null) {
			String token = jwtUtils.generateToken(authenticationRequest, ClientType.Administrator);
			return ResponseEntity.ok(new AuthenticationResponse(token));
		} else {
			return new ResponseEntity<String>("Invalid Email or Password...", HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/addCompany")
	public void addCompany(@RequestBody Company company) throws CustomException {
		adminService.addCompany(company);
	}

	@PutMapping("/updateCompany")
	public void updateCompany(@RequestBody Company company) throws CustomException {
		adminService.updateCompany(company);
	}

	@DeleteMapping("/deleteCompany/{id}")
	public void deleteCompany(@PathVariable("id") int companyID) throws CustomException {
		adminService.deleteCompany(companyID);
	}

	@GetMapping("/getAllCompanies")
	public ArrayList<Company> getAllCompanies() throws CustomException {
		return adminService.getAllCompanies();
	}

	@GetMapping("/getOneCompany/{id}")
	public Company getOneCompany(@PathVariable("id") int companyID) throws CustomException {
		return adminService.getOneCompany(companyID);
	}

	@PostMapping("/addCustomer")
	public void addCustomer(@RequestBody Customer customer) throws CustomException {
		adminService.addCustomer(customer);
	}

	@PutMapping("/updateCustomer")
	public void updateCustomer(@RequestBody Customer customer) throws CustomException {
		adminService.updateCustomer(customer);
	}

	@DeleteMapping("/deleteCustomer/{id}")
	public void deleteCustomer(@PathVariable("id") int customerID) throws CustomException {
		adminService.deleteCustomer(customerID);
	}

	@GetMapping("/getAllCustomers")
	public ArrayList<Customer> getAllCustomers() throws CustomException {
		return adminService.getAllCustomers();
	}

	@GetMapping("/getOneCustomer")
	public Customer getOneCustomer(@PathVariable("id") int customerID) throws CustomException {
		return adminService.getOneCustomer(customerID);
	}
}
