package com.smhrd.haru.domain;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class KakaoMember {
	
	private String id;
	private String nickName;
	private String email;

}
