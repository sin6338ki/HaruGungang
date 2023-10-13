package com.smhrd.haru.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.smhrd.haru.domain.HaruMember;

@Mapper
public interface MemberMapper {

	public Integer memberCheck(HaruMember harumember);

	public Integer snsMemberCheck(HaruMember harumember);

	public int join(HaruMember harumember);

	public HaruMember login(HaruMember harumember);

	public int snsJoin(HaruMember harumember);

	public HaruMember snsLogin(String sns_user_id);

	// 회원정보 수정
	public int update(HaruMember updateMember);

	// 회원 한명 전체 정보 조회
	public HaruMember memberInfo(String loginId);

	// 회원 정보 삭제
	public int delete(String id);
	
	// 네이버 로그인
	public int snsNaverJoin(HaruMember harumember);

// 이전 코드들(사용X)	
//	public Integer memberCheck(HaruMember member);
//	
//	public int naverLogin(HaruMember member);
//	
//	public int kakaoLogin(HaruMember member);
//	
//	public HaruMember kakaoLogin2(HaruMember member);

}
