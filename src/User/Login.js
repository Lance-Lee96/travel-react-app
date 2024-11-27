import React from "react";

const Login = () => {
  const toSignup = () => {
    window.location.href = "/signup";
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header Section */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Small Logo */}
        <div
          style={{
            width: "100px",
            height: "50px",
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Small Logo
        </div>

        {/* Icons */}
        <div style={{ display: "flex", gap: "10px" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Home
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Map
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            MyPage
          </div>
          <div
            style={{
              width: "40px",
              height: "40px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Post
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main //페이지의 다른 부분(헤더, 네비게이션, 푸터 등)과 구분
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px", // 간격 설정
        }}
      >
        {/* Login Form */}
        <form
          style={{
            width: "35%",
            maxWidth: "400px",
            minWidth: "300px", // 최소 크기 설정
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            margin: "0 10px", // 양옆 여백 추가
          }}
        >
          <h3 style={{ textAlign: "center" }}>::: 로그인 :::</h3>
          <div style={{ marginBottom: "15px", marginRight: "18px" }}>
            <label htmlFor="userId" style={{ display: "block", marginBottom: "5px" }}> 
              {/* for 속성은 라벨(label)과 결합될 요소를 명시 
              react는 JSX를 사용하고 자바스크립트의 루프문 예약어 for와 겹치기 때문에 htmlFor로 사용한다.*/}
              아이디
            </label>
            <input
              id="userId"
              name="userId"
              style={{
                width: "100%", 
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px", marginRight: "18px"}}>
            <label htmlFor="userPassword" style={{ display: "block", marginBottom: "5px" }}>
              비밀번호
            </label>
            <input
              id="userPassword"
              name="userPassword"
              type="password"
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ textAlign: "center", marginBottom: "15px" }}>
            <input
              type="submit"
              value="로그인"
              style={{
                padding: "10px 20px",
                marginBottom: "10px", // 로그인 버튼과 회원가입 버튼 간격 추가
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer", //사용자가 마우스 커서를 해당 요소 위에 올렸을 때 손가락 모양의 커서로 변경되게 하는 역할, 클릭 가능한 영역임을 시각적으로 표시함
                width: "100%", // 버튼 너비를 100%로 설정하여 입력란과 동일하게 맞추기, 하지만 잘 맞춰지지 않아서 일단 px 로 맞춤
              }}
            />
            <input
              type="button"
              value="회원가입"
              onClick={toSignup}
              style={{
                padding: "10px 20px",
                backgroundColor: "#008CBA",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%", // 버튼 너비를 100%로 설정하여 입력란과 동일하게 맞추기
              }}
            />
          </div>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <p>구글/카카오/네이버 연동</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                구글
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                카카오
              </div>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                네이버
              </div>
            </div>
          </div>
        </form>

        {/* Large Logo */}
        <div
          style={{
            width: "25%",
            height: "auto", // 높이를 자동으로 조정
            maxWidth: "400px", // 최대 너비 제한
            aspectRatio: "1 / 1", // 정사각형 비율 유지
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          큰 로고
        </div>
      </main>
    </div>
  );
};

export default Login;
