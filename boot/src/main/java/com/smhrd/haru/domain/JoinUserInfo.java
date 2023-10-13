package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class JoinUserInfo {
	
	private String id;
	private String pw;
	private String gender;
	private String age;

}
