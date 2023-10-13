package com.smhrd.haru.controller;

import org.json.simple.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.haru.domain.MainDTO;
import com.smhrd.haru.service.MainService;

@RestController
@CrossOrigin("http://localhost:3000")
public class MainController {

	@Autowired
	private MainService service;

	//추천하는 영양성분과 검색량 불러오기 (전체정보)
	@PostMapping("/main")
	public JSONArray recNutriList(@RequestBody MainDTO dto) {
		
		System.out.println("이곳은 8085");
		
		JSONArray arr = service.recNutriList(dto);
		
		return arr;
	}
	
	
	
}
