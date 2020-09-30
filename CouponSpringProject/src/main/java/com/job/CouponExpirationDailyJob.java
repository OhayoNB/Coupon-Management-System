package com.job;

import java.sql.Date;
import java.util.Calendar;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.model.Coupon;
import com.repository.CouponsRepository;

@Component
@Scope("singleton")
public class CouponExpirationDailyJob implements Runnable {

	@Autowired
	private CouponsRepository couponsRepo;

	private boolean quit;

	public CouponExpirationDailyJob() {

	}

	@Override
	public void run() {
		while(!quit) {
			for (Coupon cpn : couponsRepo.findByEndDateBefore(new Date(Calendar.getInstance().getTime().getTime()))) {
				couponsRepo.delete(cpn);
			}
			try {
				Thread.sleep(864000000);
			} catch (InterruptedException e) {
				System.out.println(("Exception in CouponExpirationDailyJob - " + e.getMessage()));
			}
		}
	}

	public void stop() {
		quit = true;
	}

}