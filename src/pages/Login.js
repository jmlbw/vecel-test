import React, { useState, useContext } from 'react';
import styled from '../styles/pages/Login.module.css';
import { postLogin } from '../apis/loginAPI/postLogin';
import AppContext from '../contexts/AppContext';

export default function Login() {
  const { state, setState } = useContext(AppContext);

  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const [err, setErr] = useState({ loginId: null, password: null });
  const [loginErr, setLoginErr] = useState(null);

  const onLoginIdChange = (e) => {
    setLoginId(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //유효성 검사
  const loginValidate = () => {
    let isLoginVaalid = true;
    const loginValidationErr = {};

    setLoginErr(null);

    if (!loginId) {
      isLoginVaalid = false;
      loginValidationErr.loginId = '아이디를 입력해주세요';
    }

    if (!password) {
      isLoginVaalid = false;
      loginValidationErr.password = '비밀번호를 입력해주세요';
    }

    setErr(loginValidationErr);
    return isLoginVaalid;
  };

  const onLoginSubmit = () => {
    if (!loginValidate()) {
      return;
    }

    postLogin(loginId, password)
      .then((response) => {
        if (response.status === 200) {
          setState({ ...state, isLoggedIn: true });
        }
      })
      .catch((error) => {
        setLoginErr('아이디나 비밀번호를 잘 못 입력하셨습니다.');
        setLoginId('');
        setPassword('');
      });
  };

  return (
    <div className={styled.login_body}>
      <div className={styled.login_page}>
        <div className={styled.login_container}>
          <div className={styled.login_left_box}>
            <div className={styled.login_title}>SimpleSign</div>
            <div className={styled.eula}>
              전자결재
              <br />
              5조
            </div>
          </div>
          <div className={styled.login_right_box}>
            <svg className={styled.login_svg} viewBox="0 0 320 300">
              ...
            </svg>
            <div className={styled.login_form}>
              <div>
                <label className={styled.login_label} htmlFor="login_id">
                  ID
                </label>
                <input
                  className={styled.login_input}
                  type="text"
                  id="login_id"
                  value={loginId}
                  onChange={onLoginIdChange}
                />
                {err.loginId && (
                  <span className={styled.login_err_massage}>
                    {err.loginId}
                  </span>
                )}
                <label className={styled.login_label} htmlFor="password">
                  Password
                </label>
                <input
                  className={styled.login_input}
                  type="password"
                  id="password"
                  value={password}
                  onChange={onPasswordChange}
                />
                {err.password && (
                  <span className={styled.login_err_massage}>
                    {err.password}
                  </span>
                )}
              </div>
              {loginErr && (
                <div className={styled.login_err_massage}>{loginErr}</div>
              )}
              <button id={styled.login_button} onClick={onLoginSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
