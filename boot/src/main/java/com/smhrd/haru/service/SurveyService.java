package com.smhrd.haru.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.TblNutriFunc;
import com.smhrd.haru.domain.TblNutriRec;
import com.smhrd.haru.domain.TblUserSurvey;
import com.smhrd.haru.mapper.SurveyMapper;

@Service
public class SurveyService {
	
	@Autowired
	private SurveyMapper mapper;
	
	//영양제 추천 DB 가져오기 - 관심항목
	public JSONArray recSurvey(String interest1, String interest2, String interest3){
		List<TblNutriFunc> recArray = mapper.recSurvey(interest1, interest2, interest3);
		JSONArray jsonArr = new JSONArray();
		for(TblNutriFunc nf : recArray ) {
			JSONObject obj = new JSONObject();
			obj.put("recNutriBySurvey", nf);
			jsonArr.add(obj);
		}
		return jsonArr;
	}
	
	//나이, 성별 영양제 추천
	public JSONArray recBasic(String gender, int ageRange) {
		
		System.out.println("service" + ageRange);
		
		List<TblNutriRec> recArray = mapper.recBasic(gender, ageRange);
		
		JSONArray jsonArr = new JSONArray();
		for(TblNutriRec nr : recArray) {
			JSONObject obj = new JSONObject();
			obj.put("recNutriByBasic", nr);
			
			System.out.println("service 반환 : "+nr.getGender()+nr.getAge_group());
			
			jsonArr.add(obj);
		}
		return jsonArr;
		
	}

}
