package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.TblNutriFunc;
import com.smhrd.haru.domain.TblNutriRec;
import com.smhrd.haru.domain.TblUserSurvey;

@Mapper
public interface SurveyMapper {
	
	//관심항목 - 추천
	public List<TblNutriFunc> recSurvey(String interest1, String interest2, String interest3);
	
	//성별, 연령 - 추천
	public List<TblNutriRec> recBasic(String gender, int ageRange);
}


