package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class TblNutriFaq {

	private String question;
	private String answer;
	private String nutri_name;
}
