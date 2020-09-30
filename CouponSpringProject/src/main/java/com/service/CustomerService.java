package com.service;

import java.util.ArrayList;
import java.util.Calendar;

import org.springframework.stereotype.Service;

import com.exceptions.CustomException;
import com.model.Category;
import com.model.Coupon;
import com.model.Customer;

@Service
public class CustomerService extends ClientService {

	private int customerID;

	public CustomerService() {

	}

	@Override
	public boolean login(String email, String password) throws CustomException {
		if(email != null && password != null) {	
			Integer id = customersRepo.findByEmailAndPassword(email,password);
			if(id != null) {
				customerID = id;
			}

			//Brining the specific id from customers table to initiate the customerID data type
			if(customerID > 0 && id != null) {
				System.out.println("Welcome Customer!");
				return true;
			}
			else {
				throw new CustomException("Invalid email or password");
			}		
		} else {
			throw new CustomException("Cannot login with empty details");
		}
	}

	public void purchaseCoupon(Coupon coupon) throws CustomException {
		if(coupon != null) {
			Coupon c = couponsRepo.findById(coupon.getId());
			System.out.println(c);
			if(c != null) {
				if (customersRepo.findCustomerCoupon(customerID, c.getId()) != null) {
					throw new CustomException("The same coupon cannot be purchased more than once.");	
				}
				else {
					if(c.getAmount() > 0) {					
						if(c.getEndDate() != null && c.getEndDate().getTime() <= Calendar.getInstance().getTime().getTime())
							throw new CustomException("This coupon cannot be purchased because it's expired.");
						else {
							Customer cst = customersRepo.findById(customerID);
							c.setAmount(c.getAmount() - 1);
							cst.addCoupon(c);
							customersRepo.save(cst);
						}
					}
					else {
						throw new CustomException("This coupon cannot be purchased because it's not in stock.");			
					}				
				}	
			}

			else {
				throw new CustomException("No coupon found with this specific ID.");
			}
		}
		else {
			throw new CustomException("Cannot purchase empty coupon.");
		}
	}

	public ArrayList<Coupon> getCustomerCoupons() throws CustomException {
		if(customersRepo.getOne(customerID) == null || customersRepo.getOne(customerID).getCoupons().isEmpty()) {
			throw new CustomException("No coupons has been found");	
		}
		return new ArrayList<Coupon>(customersRepo.findById(customerID).getCoupons());
	}

	public ArrayList<Coupon> getCustomerCoupons(Category category) throws CustomException {
		if(couponsRepo.findCategoryCustomer(customerID,category).isEmpty()) {
			throw new CustomException("No coupons found with the selected category");	
		}
		return new ArrayList<Coupon>(couponsRepo.findCategoryCustomer(customerID,category));
	}

	public ArrayList<Coupon> getCustomerCoupons(double maxPrice) throws CustomException {
		if(maxPrice > 0) {
			if(couponsRepo.findMaxPriceCustomer(customerID, maxPrice).isEmpty()) {
				throw new CustomException("No coupons found with selected max price");	
			}
			return new ArrayList<Coupon>(couponsRepo.findMaxPriceCustomer(customerID, maxPrice));
		} else {
			throw new CustomException("The max price must be positive");
		}
	}

	public Customer getCustomerDetails() throws CustomException {
		Customer c = customersRepo.findById(customerID);
		if(c == null) {
			throw new CustomException("Customer doesn't exists");	
		}
		return c;
	}

	public ArrayList<Coupon> getAllCoupons() throws CustomException {
		if(customersRepo.findCoupon(customerID).isEmpty()) {
			throw new CustomException("No coupons found in the system");
		}
		return new ArrayList<Coupon>(customersRepo.findCoupon(customerID));
	}
}
