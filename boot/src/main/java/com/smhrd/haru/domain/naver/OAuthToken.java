package com.smhrd.haru.domain.naver;

import lombok.Data;

@Data
public class OAuthToken {
	
	private String access_token;
	private String refresh_token;
	private String token_type;
	private int expires_in;
	private String error;
	private String error_description;

}
