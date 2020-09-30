package com.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.model.Company;
import com.model.Coupon;

public interface CompaniesRepository extends JpaRepository<Company, Integer> {

	@Query("select id from Company where email = ?1 and password =?2")
	public Integer findByEmailAndPassword(String email, String password);

	@Query("SELECT CASE WHEN COUNT(c) > 0 THEN 'true' ELSE 'false' END FROM Company c WHERE c.name = ?1 Or c.email = ?2")
	public Boolean existsByNameOrEmail(String name, String email);

	public Company findById(int id);

	public Boolean existsById(int companyID);

	@Query("select c from Company c where c.email = ?1 and c.id <> ?2")
	public Company findCompanyByEmailAndId(String email, int id);

	@Query("select c from Coupon c where companyID = ?1")
	public Set<Coupon> findCompanyCoupons(int companyID);
}
