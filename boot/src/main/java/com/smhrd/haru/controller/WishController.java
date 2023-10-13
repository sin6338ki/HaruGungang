package com.smhrd.haru.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttribute;

import com.smhrd.haru.domain.CompareDTO;
import com.smhrd.haru.domain.CompareInputDTO;
import com.smhrd.haru.domain.TblOutputWishlist;
import com.smhrd.haru.domain.TblProductDetail;
import com.smhrd.haru.domain.WishDTO;
import com.smhrd.haru.service.WishService;

import ch.qos.logback.core.model.Model;
import jakarta.servlet.http.HttpSession;

@RestController
@CrossOrigin("http://localhost:3000")
public class WishController {
	
	@Autowired
	private WishService service;
	
	//찜한 제품 DB에 저장
	@PostMapping("/addwishlist")
	public int addWishList(@RequestBody WishDTO dto) {
		
		System.out.println("제품 찜하기 통신성공");
		
		int cnt = service.addWishList(dto);
		return cnt;
	}
	
	//userid 별 찜리스트 가져오기
	@GetMapping("/wishlist/{userId}")
	public JSONArray wishlist(@PathVariable("userId") String user_id ) {
		System.out.println("위시리스트 통신성공" + user_id);
		JSONArray arr = service.wishlist(user_id);
		System.out.println(arr);
		return arr;
	}
	
	//찜하기 취소 
	@PostMapping("/wishlist/delete")
	public int deleteList(@RequestBody WishDTO dto) {
		System.out.println("찜하기 취소 통신 성공!");
		int cnt = service.deleteList(dto);
		return cnt;
	}
	
	
	//동일 영양성분 제품 비교하기 
	@PostMapping("/compare")
	public List<TblProductDetail> compareList(@RequestBody CompareDTO dto) {
		
		Set<String> sss = dto.getProduct_id();
		System.out.println("들어오는 값 sss " + sss);
		
		List<TblProductDetail> list = new ArrayList<>();
		TblProductDetail obj = new TblProductDetail();
		//set 데이터에서 item 꺼내기
		for(String item : sss) {
			CompareDTO aaa = new CompareDTO();
			
			System.out.println("item : " + item);
			obj = service.compareList(item);
			
//			list.add(service.compareList(item));
			System.out.println("list" + list);
//			JSONArray arr = service.compareList();
			
			list.add(obj);
		}
		
		System.out.println("반환 list" + list);
		return list;
//        JSONArray arr = service.compareList(dto);

	}
	
	// 찜 갯수 확인
	@GetMapping("/wishlist/num/{userId}")
	public int wishListNum(@PathVariable("userId") String userId) {
		System.out.println("리액트에서 넘어온 값 : " + userId);
		
		return service.wishListNum(userId);
	}
	
}
