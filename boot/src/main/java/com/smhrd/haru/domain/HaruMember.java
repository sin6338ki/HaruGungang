package com.smhrd.haru.domain;

import java.time.OffsetDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class HaruMember {

	private String user_id;
	private String user_pw;
	private String user_gender;
	private String user_age;
	private String user_birthdate;
	@Builder.Default
	private OffsetDateTime user_joindate = OffsetDateTime.now();
	private String user_type;
	private String sns_user_id;
	private String sns_user_name;
	private String sns_user_email;
	private String sns_user_age;
	private String sns_user_gender;

	public HaruMember(String user_id, String user_pw, String user_gender, String user_age, String user_type) {
		this.user_id = user_id;
		this.user_pw = user_pw;
		this.user_gender = user_gender;
		this.user_age = user_age;
		this.user_type = user_type;
	}

	public HaruMember(String user_type, String sns_user_id, String sns_user_name, String sns_user_email) {
		this.user_type = user_type;
		this.sns_user_id = sns_user_id;
		this.sns_user_name = sns_user_name;
		this.sns_user_email = sns_user_email;
	}

	public HaruMember(String user_id, String user_pw) {
		this.user_id = user_id;
		this.user_pw = user_pw;
	}	
	
	public HaruMember(String user_id, String user_pw, String user_age) {
		this.user_id = user_id;
		this.user_pw = user_pw;
		this.user_age = user_age;
	}

	public HaruMember(String user_type, String sns_user_id, String sns_user_name, String sns_user_email,
			String sns_user_age, String sns_user_gender) {
		this.user_type = user_type;
		this.sns_user_id = sns_user_id;
		this.sns_user_name = sns_user_name;
		this.sns_user_email = sns_user_email;
		this.sns_user_age = sns_user_age;
		this.sns_user_gender = sns_user_gender;
	}
	
	
	

}