package com.smhrd.haru.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.smhrd.haru.domain.HaruMember;
import com.smhrd.haru.domain.MainDTO;
import com.smhrd.haru.domain.TblNutriRecBasic;
import com.smhrd.haru.domain.TblNutriRecVol;

@Mapper
public interface MainMapper {

	public List<TblNutriRecBasic> recNutriList(MainDTO dto);
	public HaruMember memberInfo(String user_id);
}
