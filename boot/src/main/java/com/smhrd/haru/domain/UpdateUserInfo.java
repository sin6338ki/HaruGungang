package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpdateUserInfo {
	
	private String userId;
	private String userPw;
	private String userType;
	private String userGender;
	private String userAge;
	private String snsUserId;
	private String snsUserName;
	private String snsUserEmail;
	private String snsUserGender;
	private String snsUserAge;

}
