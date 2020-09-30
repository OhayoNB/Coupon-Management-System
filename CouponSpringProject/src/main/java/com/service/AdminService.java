package com.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;

import com.exceptions.CustomException;
import com.model.Company;
import com.model.Customer;

@Service
public class AdminService extends ClientService {

	//Constructor
	public AdminService() {

	}

	@Override
	public boolean login(String email, String password) throws CustomException {
		if(email != null && password != null) {
			if(email.equals("admin@admin.com") && password.equals("administrator")) {
				System.out.println("Welcome Admin!");
				return true;
			}
		}
		throw new CustomException("Invalid email or password");
	}

	public void addCompany(Company company) throws CustomException {
		if(company != null) {
			if(!companiesRepo.existsByNameOrEmail(company.getName(), company.getEmail())) {
				companiesRepo.save(company);
			}
			else {
				throw new CustomException("Company is already exists");
			}
		}
		else {
			throw new CustomException("Cannot add empty company");
		}		
	}

	public void updateCompany(Company company) throws CustomException {
		if(company != null) {		
			if(companiesRepo.findById(company.getId()) != null) {
				if(company.getName().equals(company.getName())) { 
					if(companiesRepo.findCompanyByEmailAndId(company.getEmail(), company.getId()) == null) {
						companiesRepo.save(company);
					}
					else {
						throw new CustomException("Company email could not be updated because the email is already exists");
					}
				}
				else {	
					throw new CustomException("Company name could not be updated");
				}
			}
			else {
				throw new CustomException("The id doesn't exist in the system ");
			}
		}
		else {
			throw new CustomException("Cannot update empty company");
		}
	}

	public void deleteCompany(int companyID) throws CustomException {
		if(companyID > 0) {		
			Company c =  companiesRepo.findById(companyID);
			if(c == null) {
				throw new CustomException("The company does not exist in the system");	
			}
			else {
				companiesRepo.delete(c);
			}
		}
		else {
			throw new CustomException("can't delete company with invalid ID");
		}
	}

	public ArrayList<Company> getAllCompanies() throws CustomException {
		if(companiesRepo.findAll().isEmpty()) {
			throw new CustomException("There are no companies in the system ");
		}
		return (ArrayList<Company>)companiesRepo.findAll();	
	}

	public Company getOneCompany(int companyID) throws CustomException {
		if(companyID > 0) {
			Company c = companiesRepo.findById(companyID);
			if(c == null) {
				throw new CustomException("No company found with this specific ID");	
			}
			return c;
		} 
		else {
			throw new CustomException("Cannot show invalid company");	
		}
	}

	public void addCustomer(Customer customer) throws CustomException {
		if(customer != null) {
			if(!customersRepo.existsByEmail(customer.getEmail())) {
				customersRepo.save(customer);				
			}
			else {
				throw new CustomException("Cannot add email - This email is already exists in the system");	
			}		
		} else {
			throw new CustomException("Cannot add empty customer");
		}
	}

	public void updateCustomer(Customer customer) throws CustomException {
		if(customer != null) {
			if(customersRepo.findById(customer.getId()) != null) {
				if(customersRepo.findCustomerByEmailAndId(customer.getEmail(),customer.getId()) != null) {
					throw new CustomException("Customer email is already exists in another customer");	
				}
				customersRepo.save(customer);
			}
			else {
				throw new CustomException("The ID does not exist in the system");	
			}
		} else {
			throw new CustomException("Cannot update empty Customer");
		}
	}

	public void deleteCustomer(int customerID) throws CustomException {
		if(customerID > 0) {
			Customer c = customersRepo.findById(customerID);
			if(c == null) {
				throw new CustomException("No customer found with this specific ID");	
			}
			else {
				c.removeCoupon(c);
				customersRepo.delete(c);
			}
		} else {
			throw new CustomException("cannot delete customer with invalid ID");
		}
	}

	public ArrayList<Customer> getAllCustomers() throws CustomException {
		if((customersRepo.findAll().isEmpty())) {
			throw new CustomException("There are no customers in the system");	
		}
		return (ArrayList<Customer>)customersRepo.findAll();
	}

	public Customer getOneCustomer(int customerID) throws CustomException {
		if(customerID > 0) {
			Customer c = customersRepo.findById(customerID);
			if(c == null) {
				throw new CustomException("No customer found with this specific ID");	
			}
			return c;
		} 
		else {
			throw new CustomException("Cannot show customer with invalid ID");
		}
	}
}
