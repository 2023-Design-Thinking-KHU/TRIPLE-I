import "./login.css";
import React from "react";
import Button from "@mui/material/Button";
export default function LoginModal({ closeModal }) {
    return (
      <div className="modal">
        <div className="modal-content">
          <p>로그인이 필요합니다.</p>
          <Button variant="contained" onClick={closeModal}>확인</Button>
        </div>
      </div>
    );
  }
  