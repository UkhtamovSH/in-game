import Modal from "react-modal";
import { useNavigate } from "react-router";
import {
  ModalCancelBtn,
  ModalContainer,
  ModalWrapper,
} from "../../styles/ModalApp.styled";


const ModalApp = (props) => {
  const {
    isOpenProps,
    onRequestCloseProps,
    setIsOpenModalProps,
    spanText,
    leaveApp,
    cancle,
    cancel,

  } = props;
  
  const history = useNavigate()

  const handleSubmit  = () => {
    window.localStorage.clear()
    history("/")
  }
  return (
    <Modal
      isOpen={isOpenProps}
      onRequestClose={onRequestCloseProps}
      className="modulWrapper"
    >
      <ModalWrapper {...props}>
        <ModalContainer>
          <p>{spanText}</p>
          <span onClick={() => handleSubmit()}>{leaveApp}</span>
        </ModalContainer>
        {cancel && (
          <ModalCancelBtn onClick={setIsOpenModalProps}>
            <p>{cancle}</p>
          </ModalCancelBtn>
        )}
      </ModalWrapper>
    </Modal>
  );
};

export default ModalApp;
