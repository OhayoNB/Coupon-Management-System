package com;

import java.sql.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.exceptions.CustomException;
import com.job.CouponExpirationDailyJob;
import com.login.LoginManager;
import com.model.Category;
import com.model.ClientType;
import com.model.Company;
import com.model.Coupon;
import com.model.Customer;
import com.service.AdminService;
import com.service.CompanyService;
import com.service.CustomerService;

@Component
@Scope("singleton")
public class Test {
	
	@Autowired
	LoginManager loginManager;

	@Autowired
	CouponExpirationDailyJob dailyJob;

	public void testAll() {
//		try {			
//			Thread t = new Thread(dailyJob, "First Thread");
//			t.start();
			
//			AdminService adminService =  (AdminService)loginManager.login("admin@admin.com", "admin", ClientType.Administrator);
//			adminService.addCompany(new Company("Amdocs", "amdocs@amdocs.com", "1234"));
//			adminService.addCustomer(new Customer("Bar", "Ohayon", "ohayonzzb@gmail.com", "1234"));
//			Company company = new Company("Bar", "amdocs@gmail.com", "12");
//			company.setId(1);
//			adminService.updateCompany(company);
//			adminService.deleteCompany(1);
//			for (Company company : adminService.getAllCompanies()) {
//				System.out.println(company);
//			}
//			System.out.println(adminService.getOneCompany(2));
//			Customer customer = new Customer("Bar", "Ohayon", "ohayonzz@gmail.com", "1234");
//			customer.setId(2);
//			adminService.updateCustomer(customer);
//			adminService.deleteCustomer(2);
//			for (Customer customer : adminService.getAllCustomers()) {
//				System.out.println(customer);
//			}
//			System.out.println(adminService.getOneCustomer(2));
//			adminService.deleteCustomer(3);
//			adminService.deleteCompany(2);

//			CompanyService companyService =  (CompanyService)loginManager.login("ohayonzzb@gmail.com", "1234", ClientType.Company);
//			companyService.addCoupon(new Coupon(2, Category.VACATION, "M", "****", java.sql.Date.valueOf("2020-5-20"), java.sql.Date.valueOf("2020-5-25"), 2, 130, "$$$$$"));
//			Coupon coupon = new Coupon(3, Category.ELECTRICITY, "C", "****", java.sql.Date.valueOf("2020-5-20"), java.sql.Date.valueOf("2020-5-24"), 2, 50, "$$$$$");
//			coupon.setId(2);
//			companyService.updateCoupon(coupon);
//			companyService.deleteCoupon(2);
//			for (Coupon coupon : companyService.getCompanyCoupons()) {
//				System.out.println(coupon);
//			}
//			for (Coupon coupon : companyService.getCompanyCoupons(Category.ELECTRICITY)) {
//				System.out.println(coupon);
//			}
//			for (Coupon coupon : companyService.getCompanyCoupons(200)) {
//				System.out.println(coupon);
//			}
//			System.out.println(companyService.getCompanyDetails());
//			companyService.deleteCoupon(5);

//			CustomerService customerService =  (CustomerService)loginManager.login("aaa@aaa.com", "12345", ClientType.Customer);
//			Coupon coupon = new Coupon(2, Category.ELECTRICITY, "C", "****", java.sql.Date.valueOf("2020-5-20"), java.sql.Date.valueOf("2020-5-24"), 2, 50, "$$$$$");
//			coupon.setId(3);
//			customerService.purchaseCoupon(coupon);
//			for (Coupon coupon : customerService.getCustomerCoupons()) {
//				System.out.println(coupon);
//			}
//			for (Coupon coupon : customerService.getCustomerCoupons(Category.FOOD)) {
//				System.out.println(coupon);
//			}
//			for (Coupon coupon : customerService.getCustomerCoupons(50)) {
//				System.out.println(coupon);
//			}
//			System.out.println(customerService.getCustomerDetails());
			
//		} catch (CustomException e) {
//			System.err.println(e.getMessage());
//		}
	}
}