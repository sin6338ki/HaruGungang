import PropTypes from 'prop-types';
import React from 'react';
import KakaoLogin from 'react-kakao-login';
import { snsPayloadParser } from '../../utils/common';

import kakao from '../../assets/images/snslogin/kakao.png'

const Kakao = (props) => {
  const token = process.env.REACT_APP_KAKAO || '';

  const success = (payload) => {
    props.success(snsPayloadParser.KAKAO(payload));
  };

  const fail = (payload) => {
    props.fail(payload);
  };

  if (!token) return <>.env의 REACT_APP_KAKAO을 확인해주세요.</>

  return (
    // <></>
    <KakaoLogin
      token={token}
      onSuccess={success}
      onFailure={fail}
      getProfile={true}
      render={renderProps => (
        <img src={kakao}  onClick={renderProps.onClick} ></img>
      )}
    />
  );
};

Kakao.propTypes = {
  success: PropTypes.func.isRequired,
  fail: PropTypes.func.isRequired,
};

export default Kakao