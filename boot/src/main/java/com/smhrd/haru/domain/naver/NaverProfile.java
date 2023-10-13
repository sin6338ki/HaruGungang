package com.smhrd.haru.domain.naver;

import lombok.Data;

@Data
public class NaverProfile {

	public String resultcode;
	public String message;
	public Response response;
	
	@Data
	public class Response {

		public String id;
		public String age;
		public String gender;
		public String email;
		public String name;

	}

}

