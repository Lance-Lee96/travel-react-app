import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../image/back.jpg"

function HomeScreen() {
  const [logo, setLogo] = useState(null);
  const [background, setBackground] = useState(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackground(URL.createObjectURL(file));
    }
  };

  const handleStart = () => {
    navigate("/Login"); // 
  };

  return (
    <div
      className="home-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header className="home-header">
        <div className="logo-container">
          {logo ? (
            <img src={logo} alt="Logo" className="logo" />
          ) : (
            <label className="file-input">
              로고 선택
              <input type="file" accept="image/*" onChange={handleLogoChange} />
            </label>
          )}
        </div>
        <div className="icon-container">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon">
              아이콘 {i + 1}
            </div>
          ))}
        </div>
      </header>

        <button className="start-button" onClick={handleStart}>
          시작하기
        </button>
      </div>

  );
}

export default HomeScreen;