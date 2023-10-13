package com.smhrd.haru.controller;

import java.util.Arrays;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.haru.domain.BasicDTO;
import com.smhrd.haru.domain.SurveyDTO;
import com.smhrd.haru.service.SurveyService;

@RestController
@CrossOrigin("http://localhost:3000")
public class SurveyController {
	
	@Autowired
	private SurveyService service;

	//관심 항목별 추천 영양제 조회
	@PostMapping("/survey/result")
	public JSONArray recSurvey(@RequestBody SurveyDTO dto) {
		
		String interest1 = dto.getInterest1();
		String interest2 = dto.getInterest2();
		String interest3 = dto.getInterest3();
		
		JSONArray recArray = service.recSurvey(interest1, interest2, interest3);
		return recArray;
	}
	
	//성별, 나이에 따른 추천 영양제 조회
	@PostMapping("/survey/result2")
	public JSONArray recBasic(@RequestBody BasicDTO dto) {
		
		System.out.println("result 2 통신성공");
		
		String gender = dto.getGender();
		int ageRange = dto.getAgeRange();
		System.out.println("controller" + ageRange);
		
		JSONArray recArray = service.recBasic(gender, ageRange);
		
		return recArray;
	}

}
