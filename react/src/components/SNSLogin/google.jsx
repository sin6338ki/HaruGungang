import React from 'react';
import PropTypes from 'prop-types';
import { snsPayloadParser } from '../../utils/common';
import {GoogleLogin} from "@react-oauth/google";
import {GoogleOAuthProvider} from "@react-oauth/google";
import jwtDecode from 'jwt-decode'
import google from '../../assets/images/snslogin/google.png'
import { useNavigate } from 'react-router';
import axios from 'axios';

const Google = (props) => {

  const nav = useNavigate()

  const clientId = process.env.REACT_APP_GOOGLE || '';

  const success = (payload) => {
    props.success(snsPayloadParser.GOOGLE(payload));
    
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!clientId) return <>.env의 REACT_APP_GOOGLE을 확인해주세요.</>

  return (
    <div id='google-login-btn'>
            <GoogleOAuthProvider clientId={clientId} >
              
                <GoogleLogin
                    onSuccess={(res) => {
                        console.log(res);
                        console.log(jwtDecode(res.credential));
                        // 사용자 정보 저장
                        const googleEmail = jwtDecode(res.credential).email
                        const googleName = jwtDecode(res.credential).name
                        console.log('여기', googleEmail);
                        const googleUserInfo = {
                          email: `${googleEmail}`,
                          name: `${googleName}`
                        }
                        console.log(googleUserInfo);
                        // 스프링으로 데이터 전송
                        axios.post('http://localhost:8085/haru/google/login', googleUserInfo)
                        .then(res => {
                          console.log('성공', res);

                          sessionStorage.setItem('id', res.data.loginMember.sns_user_id)

                          console.log('세션 저장 성공, 아이디 :', sessionStorage.getItem('id'));

                          if (props.menu === 'mypage') {
                            nav('/haru/mypage')
                          } else if (props.menu === 'wishlist') {
                            nav('/haru/wishlist')
                          } else {
                            window.location.href = 'http://localhost:3000/haru/main'
                          }
                        })
                        .catch(e => {
                          console.log('실패', e);
                        })
                    }}
                    onFailure={(err) => {
                        console.log(err);
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    // <GoogleLogin
    //   clientId={clientId}
    //   onSuccess={success}
    //   onFailure={fail}
    //   cookiePolicy={'single_host_origin'}
    //   render={renderProps => (
    //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}> Google Login</button>
    //   )}
    // />
  );
};

Google.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Google;