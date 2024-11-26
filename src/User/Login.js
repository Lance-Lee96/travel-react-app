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
      <main
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
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="userId" style={{ display: "block", marginBottom: "5px" }}>
              아이디
            </label>
            <input
              id="userId"
              name="userId"
              style={{
                width: "382px", 
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="pwd" style={{ display: "block", marginBottom: "5px" }}>
              비밀번호
            </label>
            <input
              id="pwd"
              name="pwd"
              type="password"
              style={{
                width: "382px",
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
                cursor: "pointer",
                width: "100%", // 버튼 너비를 100%로 설정하여 입력란과 동일하게 맞추기
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
            height: "50%",
            border: "1px solid #ddd",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          Large Logo
        </div>
      </main>
    </div>
  );
};

export default Login;
