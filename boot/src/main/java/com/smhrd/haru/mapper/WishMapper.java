package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.json.simple.JSONArray;

import com.smhrd.haru.domain.CompareDTO;
import com.smhrd.haru.domain.TblOutputWishlist;
import com.smhrd.haru.domain.TblProductDetail;

@Mapper
public interface WishMapper {
	
	//찜하기 추가
	public int addWishList(String user_id, String product_id);
	
	//찜하기 삭제
	public int deleteList(String user_id, String product_id);
	
	//같은 제품 있는지 확인
	public int isList(String user_id, String product_id);
	
	//찜목록 조회
	public JSONArray wishlist(String user_id);
	
	//동일 성분 제품 비교
//	public List<TblOutputWishlist> compareList(String id);
	public TblProductDetail compareList(String id);

}
