package com.smhrd.haru.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.TblNutriFaq;
import com.smhrd.haru.domain.TblNutriRecVol;
import com.smhrd.haru.domain.TblNutritionDetail;
import com.smhrd.haru.domain.TblProductDetail;
import com.smhrd.haru.mapper.InfoMapper;

@Service
public class InfoService {
	
	@Autowired
	private InfoMapper mapper; 
	
	//영양성분 상세 정보 불러오기
	public JSONObject nutriDetail(String nutri_name) {
		System.out.println("여기는 service");
		
		TblNutritionDetail nd = mapper.nutriDetail(nutri_name);
		
			JSONObject obj = new JSONObject();
			obj.put("recNutri", nd);
			
		
		return obj;
	}
	
	//faq 불러오기
	public JSONArray nutriFaq(String nutri_name){
		List<TblNutriFaq> arr = mapper.nutriFaq(nutri_name);
		JSONArray jarr = new JSONArray();
		for(TblNutriFaq nf : arr) {
			JSONObject obj = new JSONObject();
			obj.put("nutriFaq", nf);
			jarr.add(obj);
		}
		return jarr;
		
	}
	
	//제품 상세 정보 불러오기
	public JSONObject productDetail(String productId) {
		TblProductDetail pd  = mapper.productDetail(productId);
		JSONObject obj = new JSONObject();
		obj.put("recNutri", pd);
		return obj;
	}
}
