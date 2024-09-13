import React, { useState } from 'react';
import axios from 'axios';
import '../Register.css';

function Register({ onRegisterSuccess }) {
  const [loginId, setLoginId] = useState('');
  const [pwd, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleRegister = async () => {
    console.log("Registering with:", { loginId, pwd, name });
    try {
      const response = await axios.post('http://localhost:8081/api/user/register', {
        loginId,
        pwd,
        name,
      });
      if (response.status === 200) {
        onRegisterSuccess();
      }
    } catch (error) {
      console.error('회원가입 에러 발생:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>회원가입</h2>
      <input
        type="text"
        className="register-input"
        placeholder="아이디"
        value={loginId}
        onChange={(e) => setLoginId(e.target.value)}
      />
      <input
        type="password"
        className="register-input"
        placeholder="비밀번호"
        value={pwd}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="name"
        className="register-input"
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="register-button" onClick={handleRegister}>회원가입</button>
    </div>
  );
}

export default Register;
