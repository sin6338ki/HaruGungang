package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TblOutputWishlist {
	
	private String product_id;
	private String detail_url; 
	private String detail_name; 
	private int detail_price; 
	private String pack_unit;
	private String nutri_name; 
	private String manufacturer; 
	private String day_times;
	private int day_many;
	private String day_when; 
	private String bf_af_meal;
	private String intake_precaution; 
	private String shape;
	private String functionality;
	private String img;

}
