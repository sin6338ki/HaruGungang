import React, {useEffect} from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GoogleLogin from './SNSLogin/google'
import KakaoLogin from './SNSLogin/kakao'
import NaverLogin from './SNSLogin/naver'
import { Container, Row, Col, Form, FormGroup, Input, Label, Button } from 'reactstrap';

import naver from '../assets/images/snslogin/naver.png'
import kakao from '../assets/images/snslogin/kakao.png'

const Login = () => {

    // 카카오 로그인 정보
  const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID
  const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_CALLBACK_URL
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

  // 네이버 로그인 정보
  const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID
  const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_CALLBACK_URL
  const STATE = 'state'
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URI}&state=${STATE}`


  const nav = useNavigate()

  const { menu } = useParams()

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')

  // useEffect(()=>{
  //   console.log('ID :', id);
  // }, [id])
  // useEffect(()=>{
  //   console.log('PW :', pw);
  // }, [pw])

  const loginUserInfo = {
    id: `${id}`,
    pw: `${pw}`
  }

  const loginClick = () => {
    console.log('로그인 버튼 클릭!');

    if (id == '' || pw == '') {
      alert('아이디, 또는 비밀번호를 입력해주세요!')
    } else {
      console.log('스프링으로 넘기는 값 :', loginUserInfo);
        axios.post('http://localhost:8085/haru/login', loginUserInfo)
        .then(res => {
          console.log('통신성공' , res.data);

          sessionStorage.setItem('id', res.data.loginMember.user_id)

          console.log('세션 저장 성공, 아이디 :', sessionStorage.getItem('id'));

          console.log('로그인 성공');

          if (menu === 'mypage') {
            nav('/haru/mypage')
          } else if (menu === 'wishlist') {
            nav('/haru/wishlist')
          } else {
            window.location.href = 'http://localhost:3000/haru/main'
          }
        })
        .catch(e => console.log(e))
    }
  } 

  const onSuccessHandler = res => {
    console.log(res)
  }
  return (
    <div className='wrapper'>
      <div className="spacer" id="forms-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
                <h1 className="title font-bold">로그인</h1>
            </Col>
         </Row>
        </Container>
      </div>
        <Container>
            
            <Form className="row" id="form-center">
              {/* 로그인 - 아이디 */}
              <FormGroup className="col-md-6">
                    <Label htmlFor="id">ID</Label>
                    <Input onChange={e=>{setId(e.target.value)}} type="text" className="form-control" id="id" placeholder="ID" maxLength="50" tabindex="1"/>
              </FormGroup>
              
              {/* 로그인 - 패스워드 */}
              <FormGroup className="col-md-6">
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={e=>{setPw(e.target.value)}} type="password" className="form-control" id="password" placeholder="Password" maxlength="15" tabindex="2"/>
                    <span className="caps_Lock" style={{display: 'none'}}>
                      <em></em>
                    <strong>Caps Lock</strong>이 켜져 있습니다.
                    </span>
              </FormGroup>
              <br/><br/>
              <Col className='detailFunc_container'>
                    <Button onClick={loginClick} className="btn btn-success waves-effect waves-light m-r-10" tabindex="3">로그인</Button>
              </Col>
          <br/>
        
          <div md="7" className="text-center">
            <Row className='form-center'>
            
            <a className='naver' href={NAVER_AUTH_URL}>
            <em></em>
            <img src={naver} width={200} ></img>
          </a>
          </Row>
          <Row className='form-center'>
          <a className='kakao' href={KAKAO_AUTH_URL}>
            <em></em>
            <img src={kakao} width={200} ></img>
          </a>
          </Row>
          <Row > 
          <GoogleLogin
              menu={menu}
              success={onSuccessHandler}
              fail={res => console.log(res)}
          />
          </Row>
        </div>
        </Form>
</Container>     
    </div>
  )
}

export default Login