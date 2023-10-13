import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from 'axios'

const ProfilePath = () => {
    const [userId, setUserId] = useState('');
    const [nickName, setNickName] = useState();
    const [email, setEmail] = useState();

    const nav = useNavigate()

    const getProfile = async () => {
        try {
          // Kakao SDK API를 이용해 사용자 정보 획득
          let data = await window.Kakao.API.request({
            url: "/v2/user/me",
          });
          // 사용자 정보 변수에 저장
          setUserId(data.id);
          setNickName(data.properties.nickname);
          setEmail(data.kakao_account.email)
          console.log('변수 저장 완료', data);

          const params = new URLSearchParams();

          params.append('id', data.id)
          params.append('nickName', data.properties.nickname)
          params.append('email', data.kakao_account.email)

          axios.post('http://localhost:8085/haru/kakao/login', params)
          .then((res)=>{
            console.log('통신성공', res.data.loginMember);

            sessionStorage.setItem('id', res.data.loginMember.sns_user_id)

            console.log('세션 저장 성공, 아이디 :', sessionStorage.getItem('id'));

            window.location.href = 'http://localhost:3000/haru/main'

          }).catch((e)=>{
            console.log('axios error!', e);
          })
        }catch(e){
          console.log('try catch error', e);
        }
      };

    useEffect(() => {
        getProfile();
        console.log('getProfile 실행');
    }, []);    

    return(
        <div>
        {/* <h2>{userId}</h2>
        <h2>{nickName}</h2>
        <h2>{email}</h2> */}
      </div>
    )
}
export default ProfilePath;