import React, { useState, useRef } from 'react';

const styles = {
  image: {
    with: 400,
    height: 300,
    borderRadius: 25,
  },
  div: {
    textAlign: 'center',
    marginTop: '150px',
  },

  font: {
    fontSize: '20px',
    marginTop: '50px',
  },
};

const SignUp = (props) => {
  const [imgFile, setImgFile] = useState('');
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangePasswordCheck = (event) => {
    setPasswordCheck(event.target.value);
  };

  const handleSubmit = (event) => {
    alert(` 이메일 : ${email} 패스워드 : ${password}`);
    event.preventDefault();
  };

  return (
    <div style={styles.div}>
      <img
        src={imgFile ? imgFile : `../lavar.png`}
        alt="프로필 이미지"
        style={styles.image}
      />
      <br />
      <form onSubmit={handleSubmit} style={styles.font}>
        <label>
          이메일 :
          <input type="text" value={email} onChange={handleChangeEmail} />
        </label>
        <br />
        <label>
          비밀번호 :
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <br />
        <label>
          비밀번호 확인 :
          <input
            type="password"
            value={passwordCheck}
            onChange={handleChangePasswordCheck}
          />
        </label>
        <br />
        <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={saveImgFile}
          ref={imgRef}
        />
        <button type="submit">제출</button>
      </form>
    </div>
  );
};

export default SignUp;
