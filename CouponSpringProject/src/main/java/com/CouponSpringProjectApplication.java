package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.job.CouponExpirationDailyJob;

@SpringBootApplication
public class CouponSpringProjectApplication {

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(CouponSpringProjectApplication.class, args);
		Thread t = new Thread(ctx.getBean(CouponExpirationDailyJob.class), "First Thread");
		t.start();
	}
}
