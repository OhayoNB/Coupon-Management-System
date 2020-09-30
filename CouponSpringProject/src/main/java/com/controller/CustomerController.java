package com.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
import com.model.Coupon;
import com.model.Customer;
import com.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController extends ClientController {

	@Autowired
	private JwtUtils jwtUtils;

	private CustomerService customerService;


	public CustomerController() {

	}

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthenticationRequest authenticationRequest) throws CustomException {
		customerService = (CustomerService)loginManager.login(authenticationRequest.getEmail(), authenticationRequest.getPassword(), ClientType.Customer);
		if(customerService != null) {
			String token = jwtUtils.generateToken(authenticationRequest, ClientType.Customer);
			System.out.println(token);
			return ResponseEntity.ok(new AuthenticationResponse(token));
		}
		else {
			return new ResponseEntity<String>("Invalid Email or Password...", HttpStatus.UNAUTHORIZED);
		}
	}

	@PostMapping("/purchaseCoupon")
	public void purchaseCoupon(@RequestBody Coupon coupon) throws CustomException {
		customerService.purchaseCoupon(coupon);
	}

	@GetMapping("/getCustomerCoupons")
	public ArrayList<Coupon> getCustomerCoupons() throws CustomException {
		return customerService.getCustomerCoupons();
	}

	@GetMapping("/getCustomerCouponsByCategory")
	public ArrayList<Coupon> getCustomerCoupons(@RequestParam("category") Category category) throws CustomException {
		return customerService.getCustomerCoupons(category);
	}

	@GetMapping("/getCustomerCouponsByPrice")
	public ArrayList<Coupon> getCustomerCoupons(@RequestParam("maxPrice") double maxPrice) throws CustomException {
		return customerService.getCustomerCoupons(maxPrice);
	}

	@GetMapping("/getCustomerDetails")
	public Customer getCustomerDetails() throws CustomException {
		return customerService.getCustomerDetails();
	}

	@GetMapping("/getAllCoupons")
	public ArrayList<Coupon> getAllCoupons() throws CustomException {
		return customerService.getAllCoupons();
	}
}
