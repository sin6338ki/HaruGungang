package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class TblProductDetail {
	
	private int detail_seq;
	private String detail_url;
	private String detail_name;
	private int detail_price;
	private String pack_unit;
	private int nutri_seq;
	private String nutri_name;
	private String nutri_content;
	private String manufacturer;
	private int day_price;
	private String day_times;
	private int day_many;
	private String day_when;
	private String bf_af_meal;
	private String intake_precaution;
	private String expire_dt;
	private String shape;
	private String fuctionality;
	private String func_material;
	private String func_material_content;
	private String etc_material;
	private String preserve;
	private String productId;
	private String img;
}
