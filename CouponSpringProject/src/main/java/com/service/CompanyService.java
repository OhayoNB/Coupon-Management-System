package com.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Calendar;

import org.springframework.stereotype.Service;

import com.exceptions.CustomException;
import com.model.Category;
import com.model.Company;
import com.model.Coupon;

@Service
public class CompanyService extends ClientService {

	private int companyID;

	public CompanyService() {

	}

	public CompanyService(int companyID) {
		this.companyID = companyID;
	}

	@Override
	public boolean login(String email, String password) throws CustomException {
		if(email != null && password != null) {		
			//Brining the specific id from companies table to initiate the companyID data type
			Integer id = companiesRepo.findByEmailAndPassword(email, password);
			if(id != null) {
				companyID = id;
			}

			if(companyID > 0 && id != null) {
				System.out.println("Welcome Company!");
				return true;
			}
			else {	
				throw new CustomException("Invalid email or password");
			}
		} else {
			throw new CustomException("Cannot login with empty details");
		}
	}

	public void addCoupon(Coupon coupon) throws CustomException {
		if(coupon != null) {
			coupon.setCompanyID(companyID);
			//Check if the date is after current time
			checkdate(coupon.getStartDate());
			//Check if the start date before end date
			if(coupon.getEndDate() != null && coupon.getStartDate().after(coupon.getEndDate()) ) {
				throw new CustomException("Cannot add coupon with invalid end date");
			}
			checkdate(coupon.getEndDate());
			if(!companiesRepo.existsById(coupon.getCompanyID()) || companyID != coupon.getCompanyID()) {
				throw new CustomException("Cannot add coupon because no company found with this specific ID");	
			}
			else {
				if(couponsRepo.existsByTitleAndCompanyID(coupon.getTitle(),coupon.getCompanyID()) ) {				
					throw new CustomException("The title is already exist in the company");	
				} else {
					couponsRepo.save(coupon);
				}
			}
		} else {
			throw new CustomException("Cannot add empty Coupon");
		}
	}

	public void updateCoupon(Coupon coupon) throws CustomException {
		if(coupon != null) {
			coupon.setCompanyID(companyID);
			//check if the date after current time
			checkdate(coupon.getStartDate());
			//Check if the start date before end date
			if(coupon.getEndDate() != null && coupon.getStartDate().after(coupon.getEndDate()) ) {
				throw new CustomException("Cannot add coupon with invalid end date");
			}
			checkdate(coupon.getEndDate());
			if(couponsRepo.findById(coupon.getId()) != null) {
				if(coupon.getCompanyID() == companyID) {
					//Cannot update title that already exists
					if(couponsRepo.existsByTitleAndCompanyIDAndID(coupon.getTitle(),coupon.getCompanyID(),coupon.getId()) != null ) {
						throw new CustomException("the title is already exist in the company");	
					}
					couponsRepo.save(coupon);
				}
				else {
					throw new CustomException("Coupon's companyId cannot be updated");	
				}
			}
			else {
				throw new CustomException("The coupon does not exist in the system");	
			}
		} else {
			throw new CustomException("Cannot update empty Coupon");
		}
	}

	public void deleteCoupon(int couponID) throws CustomException {
		if(couponID > 0) {
			Coupon c =  couponsRepo.findById(couponID);
			if(c != null) {
				couponsRepo.delete(c);
			}
			else {
				throw new CustomException("The coupon does not exist in the system");	
			}
		}else {
			throw new CustomException("Cannot delete coupon with invalid ID");
		}
	}

	public ArrayList<Coupon> getCompanyCoupons() throws CustomException {
		if(companiesRepo.findCompanyCoupons(companyID).isEmpty()) {
			throw new CustomException("No coupons exists");	
		}
		return new ArrayList<Coupon>(companiesRepo.findCompanyCoupons(companyID));
	}

	public ArrayList<Coupon> getCompanyCoupons(Category category) throws CustomException {
		if(couponsRepo.findByCategoryAndCompanyID(category, companyID).isEmpty()) {
			throw new CustomException("No coupons found with selected category");	
		}
		return new ArrayList<Coupon>(couponsRepo.findByCategoryAndCompanyID(category, companyID));
	}

	public ArrayList<Coupon> getCompanyCoupons(double maxPrice) throws CustomException {
		if(maxPrice > 0) {
			if(couponsRepo.findByMaxPrice(maxPrice, companyID).isEmpty()) {
				throw new CustomException("No coupons found with this price limit");		 
			}
			return new ArrayList<Coupon>(couponsRepo.findByMaxPrice(maxPrice, companyID));
		} else {
			throw new CustomException("The MaxPrice must be positive");
		}
	}

	public Company getCompanyDetails() throws CustomException {
		Company c = companiesRepo.findById(companyID);
		if(c == null) {
			throw new CustomException("Company does not exists");	
		}
		return c;
	}

	//Check if the date is after the current date
	private void checkdate(Date date) throws CustomException {
		if(date != null) {		
			Date currentDate = Date.valueOf(LocalDate.now());
			if(date.before(currentDate)) {
				throw new CustomException("The date have to be after the current time");
			}
		}
	}
}
