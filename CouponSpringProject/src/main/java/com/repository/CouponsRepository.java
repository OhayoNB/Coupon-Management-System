package com.repository;

import java.sql.Date;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.model.Category;
import com.model.Coupon;
import com.model.Customer;

public interface CouponsRepository extends JpaRepository<Coupon, Integer>{

	public Coupon findById(int id);

	@Query("SELECT c FROM Customer c WHERE c.id IN (SELECT c.id FROM c.coupons cust WHERE cust.id = ?1)")
	public Set<Customer> getAllCouponsCustomer(int coupon_id);

	public Set<Coupon> findByCategoryAndCompanyID(Category category, int companyID);

	@Query("select e from Coupon e where e.price <= ?1 and companyID = ?2")
	public Set<Coupon> findByMaxPrice(double price, int companyID);

	public Boolean existsByTitleAndCompanyID(String title, int companyID);
	
	@Query("select e.id from Coupon e where e.title=?1 and e.companyID=?2 and e.id <> ?3")
	Integer existsByTitleAndCompanyIDAndID(String title,int companyID , int cpnId);

	@Query("select e from Coupon e join e.customers c where c.id =?1 and e.category = ?2")
	public Set<Coupon> findCategoryCustomer(int cust_id, Category category);

	@Query("select e from Coupon e join e.customers c where c.id =?1 and e.price <= ?2")
	public Set<Coupon> findMaxPriceCustomer(int cust_id, double maxPrice);
	
	public Set<Coupon> findByEndDateBefore(Date endDate);
}

