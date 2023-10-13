package com.smhrd.haru.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.smhrd.haru.service.InfoService;

@RestController
@CrossOrigin("http://localhost:3000")
public class InfoController {
	
	@Autowired
	private InfoService service;
	
	//영양제 정보 불러오기
	@GetMapping("/nutridetail/{nutri_name}")
	public JSONObject nutriDetail(@PathVariable("nutri_name") String nutri_name) {
		System.out.println("통신성공"+nutri_name);
		JSONObject jobj = service.nutriDetail(nutri_name);
		return jobj;
	}
	
	//faq 정보 불러오기
	@GetMapping("nutrifaq/{nutri_name}")
	public JSONArray nutriFaq(@PathVariable("nutri_name") String nutri_name) {
		System.out.println("faq 통신 성공" + nutri_name);
		JSONArray arr = service.nutriFaq(nutri_name);
		return arr;
	}
	
	//제품 상세 정보 불러오기
	@GetMapping("/product/{productId}")
	public JSONObject productDetail(@PathVariable("productId") String productId) {
		System.out.println("통신성공" + productId);
		
		JSONObject jobj = service.productDetail(productId);
		return jobj;
	}
	
	

}
