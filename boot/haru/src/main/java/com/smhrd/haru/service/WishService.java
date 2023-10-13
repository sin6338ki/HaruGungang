package com.smhrd.haru.service;

import java.sql.ResultSet;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.CompareDTO;
import com.smhrd.haru.domain.TblNutriFaq;
import com.smhrd.haru.domain.TblOutputWishlist;
import com.smhrd.haru.domain.TblProductDetail;
import com.smhrd.haru.domain.WishDTO;
import com.smhrd.haru.mapper.WishMapper;

@Service
public class WishService {

	@Autowired
	private WishMapper mapper;
	
	//찜하기 목록 추가
	public int addWishList(WishDTO dto) {
		String user_id = dto.getUserId();
		String product_id = dto.getProductIdMain();
		
		int cnt = 0;
		//같은 제품 들어있는지 확인
		int same = mapper.isList(user_id, product_id);
		System.out.println(same);
		if(same != 0) {
			cnt = 0; 
		}else {	
			cnt = mapper.addWishList(user_id, product_id);
			System.out.println(cnt);
		}		
		return cnt;
	}
	
	//찜 목록에서 삭제 
	public int deleteList(WishDTO dto) {
		String user_id = dto.getUserId();
		String product_id = dto.getProductIdMain();
		
		int cnt = mapper.deleteList(user_id, product_id);
		System.out.println(cnt);
			
		return cnt;
	}
	
	
	//찜리스트 불러오기
	public JSONArray wishlist(String user_id) {
		List<TblOutputWishlist> arr = mapper.wishlist(user_id);
		JSONArray jarr = new JSONArray();
		for(TblOutputWishlist owl : arr) {
			JSONObject obj = new JSONObject();
			obj.put("wishlist", owl);
			jarr.add(obj);
		}
		return jarr;
		
	}
	
	//동일 영양성분 비교하기
//	public void compareList(CompareDTO dto) {
//		
//        Map<String, String> variables = new HashMap<>();
//
////        int index = 1;
////        for (String item : dto.getProduct_id()) {
////            String variableName = "variable" + index;
////            variables.put(variableName, item);
////            index++;
////        }
////        
////        for (Map.Entry<String, String> entry : variables.entrySet()) {
////            String variableName = entry.getKey();
////            String variableValue = entry.getValue();
////            System.out.println(variableName + ": " + variableValue);
////        }
////        List<TblOutputWishlist> arr = mapper.compareList(dto);
////        JSONArray jarr = new JSONArray();
////		for(TblOutputWishlist owl : arr) {
////			JSONObject obj = new JSONObject();
////			obj.put("comparelist", owl);
////			jarr.add(obj);
////		}
////		return jarr;
//        
//
//        
//	}
public TblProductDetail compareList(String id) {
		
		System.out.println(id);
		
//        Map<String, String> variables = new HashMap<>();
//        List<TblOutputWishlist> aaa = mapper.compareList(id);
		TblProductDetail aaa = mapper.compareList(id);
        System.out.println(aaa);
        
        return aaa;
//        int index = 1;
//        for (String item : dto.getProduct_id()) {
//            String variableName = "variable" + index;
//            variables.put(variableName, item);
//            index++;
//        }
//        
//        for (Map.Entry<String, String> entry : variables.entrySet()) {
//            String variableName = entry.getKey();
//            String variableValue = entry.getValue();
//            System.out.println(variableName + ": " + variableValue);
//        }
//        List<TblOutputWishlist> arr = mapper.compareList(dto);
//        JSONArray jarr = new JSONArray();
//		for(TblOutputWishlist owl : arr) {
//			JSONObject obj = new JSONObject();
//			obj.put("comparelist", owl);
//			jarr.add(obj);
//		}
//		return jarr;
        

        
	}
}
