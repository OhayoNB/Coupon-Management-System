package com.model;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.exceptions.CustomException;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table (name = "coupons")
public class Coupon {

	//Attributes
	private int id;
	private int companyID;
	private Category category;
	private String title;
	private String description;
	private Date startDate;
	private Date endDate;
	private int amount;
	private double price;
	private String image;
	private Set<Customer> customers = new HashSet<Customer>();

	//Parameterized constructor
	public Coupon(int companyID, Category category, String title, String description, Date startDate,
			Date endDate, int amount, double price, String image) {
		this.companyID = companyID;
		this.category = category;
		this.title = title;
		this.description = description;
		this.startDate = startDate;
		this.endDate = endDate;
		this.amount = amount;
		this.price = price;
		this.image = image;
	}

	//Default constructor
	public Coupon() {
	}

	//Getters & Setters
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getCompanyID() {
		return companyID;
	}

	public void setCompanyID(int companyID) {
		this.companyID = companyID;
	}

	@Column(name = "categoryId")
	@Enumerated(EnumType.ORDINAL)
	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) throws CustomException {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) throws CustomException {
		this.endDate = endDate;
	}

	public int getAmount() {
		return amount;
	}

	public void setAmount(int amount) {
		this.amount = amount;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@JsonBackReference
	@ManyToMany(cascade = {CascadeType.REFRESH,CascadeType.MERGE},fetch = FetchType.EAGER)
	@JoinTable(name="customers_coupons", joinColumns=@JoinColumn(name="coupon_id"), inverseJoinColumns=@JoinColumn(name="customer_id"))
	public Set<Customer> getCustomers() {
		return customers;
	}

	public void setCustomers(Set<Customer> customers) {
		this.customers = customers;
	}

	//Print Coupon Details
	@Override
	public String toString() {
		return "Coupon [id=" + id + ", companyID=" + companyID + ", category=" + category + ", title=" + title
				+ ", description=" + description + ", startDate=" + startDate + ", endDate=" + endDate + ", amount="
				+ amount + ", price=" + price + ", image=" + image + "]";
	}
	
}
