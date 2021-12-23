import React from "react";
import Modal from "react-modal";
import ModalImg from "../../assets/Img/Group 4356.png";
import CloceIcon from "../../assets/Img/closeIcon.png";
import { ModalWrapDiv, ModalDiv, ModalNav } from "../../styles/ModalApp.styled";
const ModalPay = (props) => {
  const { isOpenedProps, onRequestCloseProps, setIsOpenModalProps,errorText } = props;

  return (
    <ModalDiv>
      <Modal
        isOpen={isOpenedProps}
        onRequestClose={onRequestCloseProps}
        className="modalDiv"
      >
        <ModalWrapDiv>
          <h2>ошибка </h2>
          <span>
          {errorText}
          </span>
          <div className="modalBtn" onClick={setIsOpenModalProps}>Ok</div>
        </ModalWrapDiv>
      </Modal>
    </ModalDiv>
  );
};

export default ModalPay;
