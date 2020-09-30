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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.exceptions.CustomException;
import com.jwt.AuthenticationRequest;
import com.jwt.AuthenticationResponse;
import com.jwt.JwtUtils;
import com.model.Category;
import com.model.ClientType;
import com.model.Company;
import com.model.Coupon;
import com.service.CompanyService;

@CrossOrigin
@RestController
@RequestMapping("/company")
public class CompanyController extends ClientController {

	@Autowired
	private JwtUtils jwtUtils;

	private CompanyService companyService;


	public CompanyController() {

	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws CustomException {
		companyService = (CompanyService)loginManager.login(authenticationRequest.getEmail(), authenticationRequest.getPassword(), ClientType.Company);
		if(companyService != null) {
			String token = jwtUtils.generateToken(authenticationRequest, ClientType.Company);
			System.out.println(token);
			return ResponseEntity.ok(new AuthenticationResponse(token));
		} else {
			return new ResponseEntity<String>("Invalid Email or Password...", HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/addCoupon")
	public void addCoupon(@RequestBody Coupon coupon) throws CustomException {
		companyService.addCoupon(coupon);
	}

	@PutMapping("/updateCoupon")
	public void updateCoupon(@RequestBody Coupon coupon) throws CustomException {
		companyService.updateCoupon(coupon);
	}

	@DeleteMapping("/deleteCoupon/{id}")
	public void deleteCoupon(@PathVariable("id") int couponID) throws CustomException {
		companyService.deleteCoupon(couponID);
	}

	@GetMapping("/getCompanyCoupons")
	public ArrayList<Coupon> getCompanyCoupons() throws CustomException {
		return companyService.getCompanyCoupons();
	}

	@GetMapping("/getCompanyCouponsByCategory")
	public ArrayList<Coupon> getCompanyCoupons(@RequestParam("category") Category category) throws CustomException {
		return companyService.getCompanyCoupons(category);
	}

	@GetMapping("/getCompanyCouponsByPrice")
	public ArrayList<Coupon> getCompanyCoupons(@RequestParam("maxPrice") double maxPrice) throws CustomException {
		return companyService.getCompanyCoupons(maxPrice);
	}

	@GetMapping("/getCompanyDetails")
	public Company getCompanyDetails() throws CustomException {
		return companyService.getCompanyDetails();
	}
}
