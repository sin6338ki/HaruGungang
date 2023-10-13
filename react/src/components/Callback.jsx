import React, { useEffect, useState } from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router'

const Callback = () => {

  const nav = useNavigate()

  const code = new URL(window.location.href).searchParams.get('code')
  const state = new URL(window.location.href).searchParams.get('state')

  const getToken = async () => {
    console.log(code);
    console.log(state);
    const payload = qs.stringify({
      grant_type: 'authorization_code',
      client_id: process.env.REACT_APP_NAVER_CLIENT_ID,
      client_secret: process.env.REACT_APP_NAVER_CLIENT_SECRET,
      code: code,
      state: state
    });
    console.log(payload);
    try {
      // access token 가져오기
      const res = await axios.post(
        "/oauth2.0/token",
        payload
      );
        console.log('엑세스 토큰 요청', res);
        // 사용자 정보 요청
        const profile = await axios.get(
          "/v1/nid/me", {
            headers: {
              'Authorization': `Bearer ${res.data.access_token}`
            }
          }          
        )
        console.log('사용자 정보 요청', profile.data.response);
        // 사용자 정보 저장
        const naverUserInfo = {
          id: profile.data.response.id,
          email: profile.data.response.email,
          name: profile.data.response.name,
          gender: profile.data.response.gender,
          age: profile.data.response.age,
        }
        // 스프링으로 데이터 전송
        console.log('스프링으로 보낼 데이터 :', naverUserInfo);
        axios.post('http://localhost:8085/haru/naver/login', naverUserInfo)
        .then(res => {
          console.log(res);
          if(res.data == 1) {
            sessionStorage.setItem('id', naverUserInfo.id)
            console.log('세션 저장 성공, 아이디 :', sessionStorage.getItem('id'));            
            window.location.href = 'http://localhost:3000/haru/main'
          } else {
            alert('네이버 로그인 실패')
          }
        })
        .catch(e => {
          console.log(e);
        })

    } catch (err) {
      console.log(err);
    }
  };

useEffect(() => {
    getToken();
}, []);

  return (
    <div></div>
  )
}

export default Callback