package com.smhrd.haru.service;

import java.io.IOException;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.smhrd.haru.domain.HaruMember;
import com.smhrd.haru.domain.LoginUserInfo;
import com.smhrd.haru.mapper.MemberMapper;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Service
public class MemberService {

	@Autowired
	MemberMapper mapper;

	public JSONObject join(HaruMember harumember) {
		System.out.println("컨트롤러에서 넘어온 값 : " + harumember);

		HaruMember joinMember = null;

		JSONObject obj = new JSONObject();

		Integer memberCheck = mapper.memberCheck(harumember);

		if (memberCheck != null) {
			System.out.println("기존에 등록된 멤버");
//			joinMember = mapper.login(harumember);
//			obj.put("joinMember", joinMember);
		} else { // 회원가입 진행
			int cnt = mapper.join(harumember);
			if (cnt > 0) {
				System.out.println("회원가입 성공");
				joinMember = mapper.login(harumember);
				obj.put("joinMember", joinMember);
			} else {
				System.out.println("회원가입 실패");
			}
		}
		return obj;
	}

	public JSONObject login(HaruMember harumember) {
		System.out.println("컨트롤러에서 넘어온 값 : " + harumember);

		HaruMember loginMember = null;

		JSONObject obj = new JSONObject();

		Integer memberCheck = mapper.memberCheck(harumember);

		if (memberCheck != null) {
			loginMember = mapper.login(harumember);
			obj.put("loginMember", loginMember);
		} else {
			System.out.println("로그인 실패!");
		}
		return obj;
	}

	public JSONObject snsLogin(HaruMember harumember) {

		System.out.println("컨트롤러에서 넘어온 값 : " + harumember);
		// id를 가져와야해
		String sns_user_id = harumember.getSns_user_id();

		HaruMember loginMember = null;

		JSONObject obj = new JSONObject();

		// 기존에 등록된 멤버인지 확인
		Integer snsMemberCheck = mapper.snsMemberCheck(harumember);

		if (snsMemberCheck != null) {
			System.out.println("기존에 등록된 멤버");
			loginMember = mapper.snsLogin(sns_user_id);
			obj.put("loginMember", loginMember);
		} else { // 처음 가입한 멤버
			int cnt = mapper.snsJoin(harumember);

			if (cnt > 0) {
				System.out.println("DB등록 성공");
				loginMember = mapper.snsLogin(sns_user_id);
				System.out.println("DB등록 후 반환 loginMember" + loginMember.getSns_user_email());
				obj.put("loginMember", loginMember);

			} else {
				System.out.println("DB등록 실패");
			}

		}

		return obj;
	}

	public int update(HaruMember updateMember) {
		int cnt = mapper.update(updateMember);
		return cnt;
	}

	public JSONObject memberInfo(String loginId) {
		System.out.println("컨트롤러에서 넘어온 값 : " + loginId);

		HaruMember harumember = mapper.memberInfo(loginId);

		JSONObject obj = new JSONObject();

		obj.put("HaruMember", harumember);

		return obj;
	}

	public int delete(String id) {
		return mapper.delete(id);
	}

	public int naverLogin(HaruMember harumember) {

		System.out.println("컨트롤러에서 넘어온 값 : " + harumember);

		// 기존에 등록된 멤버인지 확인
		Integer snsMemberCheck = mapper.snsMemberCheck(harumember);

		int cnt = 0;

		if (snsMemberCheck != null) {
			System.out.println("기존에 등록된 멤버");

			return 1;
		} else { // 처음 가입한 멤버
			cnt = mapper.snsNaverJoin(harumember);

			if (cnt > 0) {
				System.out.println("DB등록 성공");

				return cnt;

			} else {
				System.out.println("DB등록 실패");
			}
		}
		return cnt;
	}
	

	
// 이전 코드들(사용X)	
//	public JSONObject kakaoLogin2(HaruMember member) {
//		HaruMember harumember = mapper.kakaoLogin2(member);
//		
//		JSONObject obj = new JSONObject();
//		
//		obj.put("harumember", harumember);
//		
//		return obj;
//	}

//	public void kakaoLogin(HaruMember member, HttpSession session, HttpServletResponse response) {
//
////		System.out.println(member.getSns_user_id());
//
//		// 회원 정보 조회해서 이미 가입한 회원인지 체크
//		Integer memberCheck = mapper.memberCheck(member);
//
//		System.out.println("memberCheck 값 : " + memberCheck);
//
//		int cnt = 0;
//
//		if (memberCheck != null) { // 이미 가입한 회원, 회원 정보 session에 바로 저장
////			System.out.println("member객체에 값이 들어있는지 확인 : " + member.getSns_user_id());
////			session.setAttribute("member", member);
////			System.out.println("세션 성공!");
//			
//			
//			
//			try {
//				response.sendRedirect("http://localhost:3000/haru/main");
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		} else { // 처음 방문 회원, 회원 가입 진행 후 session에 저장
//			// 회원정보 DB에 저장
//			cnt = mapper.kakaoLogin(member);
//			System.out.println("DB 저장 성공!");
//
//			if (cnt > 0) { // 회원정보 DB에 저장 완료
//				session.setAttribute("member", member);
//				System.out.println("세션 성공!");
//				try {
//					response.sendRedirect("http://localhost:3000/haru/main");
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			} else { // 실패
//				System.out.println("SNS 로그인 실패");
//				try {
//					response.sendRedirect("http://localhost:3000/haru/main");
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}
//
//	}

//	public void naverLogin(HaruMember member, HttpSession session, HttpServletResponse response) {
//
////		System.out.println(member.getSns_user_id());
//
//		// 회원 정보 조회해서 이미 가입한 회원인지 체크
//		Integer memberCheck = mapper.memberCheck(member);
//
//		System.out.println("memberCheck 값 : " + memberCheck);
//
//		int cnt = 0;
//
//		if (memberCheck != null) { // 이미 가입한 회원, 회원 정보 session에 바로 저장
//			session.setAttribute("member", member);
//			System.out.println("세션 성공!");
//			try {
//				response.sendRedirect("http://localhost:3000/haru/main");
//			} catch (IOException e) {
//				e.printStackTrace();
//			}
//		} else { // 처음 방문 회원, 회원 가입 진행 후 session에 저장
//			// 회원정보 DB에 저장
//			cnt = mapper.naverLogin(member);
//			System.out.println("DB 저장 성공!");
//
//			if (cnt > 0) { // 회원정보 DB에 저장 완료
//				session.setAttribute("member", member);
//				System.out.println("세션 성공!");
//				try {
//					response.sendRedirect("http://localhost:3000/haru/main");
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			} else { // 실패
//				System.out.println("SNS 로그인 실패");
//				try {
//					response.sendRedirect("http://localhost:3000/haru/main");
//				} catch (IOException e) {
//					e.printStackTrace();
//				}
//			}
//		}
//
//	}

}
