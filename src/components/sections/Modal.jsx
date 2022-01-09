import {
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";

const Modal = (props) => {
  const { title, link } = props;
  return (
    <>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">{link}</div>
          <div className="">
            <span>{title}</span>
          </div>
          <div className="" />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ marginBottom: "0" }}>{props.children}</AppMAIN>
    </>
  );
};

export default Modal;
