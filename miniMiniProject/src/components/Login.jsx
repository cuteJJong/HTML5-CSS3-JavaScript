import React, { useState } from 'react';
import axios from 'axios';
import '../Login.css'; // 스타일 파일을 불러옴

function Login({ onLoginSuccess, onRegisterClick }) {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/user/login', {
        loginId,
        password,
      });
      if (response.status === 200) {
        onLoginSuccess();
      }
    } catch (error) {
      console.error('로그인 에러 발생:', error);
    }
  };

  return (
    <div className="login-container">
      <h2>로그인</h2>
      <input
        type="text"
        className="login-input"
        placeholder="아이디"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <input
        type="password"
        className="login-input"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login-button" onClick={handleLogin}>로그인</button>
      <button className="login-button" onClick={onRegisterClick}>회원가입</button>
    </div>
  );
}

export default Login;
