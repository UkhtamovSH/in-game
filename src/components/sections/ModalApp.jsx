import Modal from "react-modal";
import {
  ModalCancelBtn,
  ModalContainer,
  ModalWrapper,
} from "../../styles/ModalApp.styled";

const ModalApp = (props) => {
  const { isOpenProps, onRequestCloseProps, setIsOpenModalProps } = props;
  return (
    <Modal
      isOpen={isOpenProps}
      onRequestClose={onRequestCloseProps}
      className="modulWrapper"
    >
      <ModalWrapper>
        <ModalContainer>
          <p>Вы действительно хотите выйти со своего аккаунта?</p>
          <span>Да, выйти</span>
        </ModalContainer>
        <ModalCancelBtn onClick={setIsOpenModalProps}>
          <p>Отмена</p>
        </ModalCancelBtn>
      </ModalWrapper>
    </Modal>
  );
};

export default ModalApp;
