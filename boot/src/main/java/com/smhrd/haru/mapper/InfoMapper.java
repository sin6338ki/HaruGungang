package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblNutriFaq;
import com.smhrd.haru.domain.TblNutritionDetail;
import com.smhrd.haru.domain.TblProductDetail;

@Mapper
public interface InfoMapper {

	//영양성분 상세 정보 조회
	public TblNutritionDetail nutriDetail(String nutri_name);
	
	//FAQ조회
	public List<TblNutriFaq> nutriFaq(String nutri_name);
	
	//제품 상세정보 조회
	public TblProductDetail productDetail(String productId);
}
