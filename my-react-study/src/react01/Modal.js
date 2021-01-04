import React from "react";
import "../react01/styled/modal-styled.scss";
const Modal = ({ isOpen, close }) => {
  return (
    <>
      {isOpen ? (
        <>
          <div className="Modal-overlay" />
          <div className="Modal">
            <p className="title">NEW Todo</p>
            <div className="content">
              <label>
                <input type="radio" name="share" id="individual" value="individual" /> 개인
              </label>
              <label>
                <input type="radio" name="share" id="team" value="team" /> 팀
              </label>
              <p>할 일</p>
              <input placeholder="할 일을 입력하세용.. " />
            </div>
            <div className="button-wrap">
              <button className="cancelBtn" onClick={close}>취소</button>
              <button className="confirmBtn" onClick={close}> 확인</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
