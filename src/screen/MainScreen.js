import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "../App.css";

function MainScreen() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setNickname(`여행${randomNumber}`);
  }, []);

  // 기록 시작하기 버튼 클릭 시 실행되는 함수
  const handleStartRecord = () => {
    navigate("/record"); // "/record" 경로로 이동
  };

  // 내 게시물 보기 버튼 클릭 시 실행되는 함수
  const handleViewPosts = () => {
    navigate("/posts"); // "/posts" 경로로 이동
  };

  return (
    <div className="main-screen">
      <header className="main-header">
        <div className="logo">Main_로고</div>
        <div className="icon-container">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="icon">
              아이콘 {i + 1}
            </div>
          ))}
        </div>
      </header>
      <div className="content">
        <h1>{nickname}님 환영합니다.</h1>
        <div className="button-row">
          <button className="main-button" onClick={handleStartRecord}>
            기록 시작하기
          </button>
          <button className="main-button" onClick={handleViewPosts}>
            내 게시물 보기
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainScreen;