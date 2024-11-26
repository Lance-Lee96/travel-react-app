import React, { useState } from "react";

function Signup() {
  const [userId, setUserId] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // 폼 제출 로직 (예: API 호출) 추가
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* 헤더 섹션 */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* 작은 로고 */}
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
          small Logo
        </div>

        {/* 아이콘 */}
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
            post
          </div>
        </div>
      </header>

      {/* 메인 콘텐츠 */}
      <main
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        {/* 회원가입 폼 */}
        <form
          onSubmit={handleSubmit}
          style={{
            width: "35%",
            maxWidth: "400px",
            minWidth: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "20px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            margin: "0 10px",
          }}
        >
          <h3 style={{ textAlign: "center" }}>::: 회원가입 :::</h3>
          
          {/* 아이디 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="userId" style={{ display: "block", marginBottom: "5px" }}>
              아이디
            </label>
            <input
              id="userId"
              name="userId"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
            <input
              type="button"
              value="중복체크"
              style={{
                marginTop: "5px",
                padding: "8px 15px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            />
          </div>

          {/* 이름 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
              이름
            </label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* 닉네임 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="nickname" style={{ display: "block", marginBottom: "5px" }}>
              닉네임
            </label>
            <input
              id="nickname"
              name="nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* 이메일 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
              이메일
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* 비밀번호 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="pwd" style={{ display: "block", marginBottom: "5px" }}>
              비밀번호
            </label>
            <input
              id="pwd"
              name="pwd"
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* 비밀번호 확인 */}
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirmPwd" style={{ display: "block", marginBottom: "5px" }}>
              비밀번호 확인
            </label>
            <input
              id="confirmPwd"
              name="confirmPwd"
              type="password"
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
              style={{
                width: "382px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ddd",
              }}
            />
          </div>

          {/* 제출 버튼 */}
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <input
              type="submit"
              value="가입"
              style={{
                padding: "10px 20px",
                backgroundColor: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            />
            <input
              type="button"
              value="취소"
              onClick={() => window.location.href = "/"}
              style={{
                padding: "10px 20px",
                backgroundColor: "#008CBA",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px",
              }}
            />
          </div>
        </form>

        {/* 큰 로고 */}
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
          큰 로고
        </div>
      </main>
    </div>
  );
}

export default Signup;
