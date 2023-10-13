package com.smhrd.haru.service;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.MainDTO;
import com.smhrd.haru.domain.TblNutriRecBasic;
import com.smhrd.haru.domain.TblNutriRecVol;
import com.smhrd.haru.mapper.MainMapper;

@Service
public class MainService {
	
	@Autowired
	private MainMapper mapper;
	
	public JSONArray recNutriList(MainDTO dto) {
		List<TblNutriRecBasic> nutriList = mapper.recNutriList(dto);
		JSONArray jsonArray = new JSONArray();
		for(TblNutriRecBasic nrv : nutriList) {
			JSONObject obj = new JSONObject();
			obj.put("recNutri", nrv);
			jsonArray.add(obj);
		}
		return jsonArray;
		
	}

}
