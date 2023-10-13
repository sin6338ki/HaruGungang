package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TblNutriRecBasic {
	
	private String gender;
	private int age_range;
	private int nutri_seq;
	private String nutri_name;
	private int click_vol;

}
