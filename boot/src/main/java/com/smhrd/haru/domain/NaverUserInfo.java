package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class NaverUserInfo {
	
	private String id;
	private String email;
	private String name;
	private String gender;
	private String age;

}
