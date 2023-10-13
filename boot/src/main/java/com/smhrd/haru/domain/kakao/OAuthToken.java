package com.smhrd.haru.domain.kakao;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown=true)
public class OAuthToken {
	
	private String access_token;
	private String token_type;
	private String refresh_token;
	private int expires_in;
	private int refresh_token_expires_in;
	private String scope;

}
