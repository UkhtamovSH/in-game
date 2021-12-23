import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import Arrow from "../../assets/Img/Arrow - Right 2.png";
import { get } from "lodash";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../../styles/ContainerFluid.styled";
import {
  AutoSelectPlayer,
  AutoSelectPlayerAccount,
  AutoSelectPlayerWrapp,
  AutoSelectSave,
} from "../../styles/Setting.styled";
import { SwitchDiv } from "./Switch.styled";
import ModalApp from "./ModalApp";
import { GetAuthInstance } from "../../helpers/httpClient";

const Setting = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [onSwitch, setOnSwitch] = useState(0);
  const [autopadbor, setAutopadbor] = useState(0);
  const [auto_roll, setAuto_roll] = useState(0);
  const [updatedLists, setUpdatedLists] = useState([]);

  isOpenModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData();

    dataForm.append("notification", onSwitch);
    dataForm.append("autopadbor", autopadbor);
    dataForm.append("auto_roll", auto_roll);

    GetAuthInstance()
      .post("api/v1/user-settings/", dataForm)
      .then((res) => {
        setUpdatedLists([...updatedLists, res.dataForm]);
        // setOnSwitch();
      })
      .catch((err) => {});
  };

  return (
    <div>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="">
            <span>Рейтинг игроков</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppMAIN>
          <AutoSelectPlayerWrapp>
            <SwitchDiv>
              <AutoSelectPlayer>
                <p>Автоподбор игроков</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={onSwitch}
                    onChange={(e) => {
                      setOnSwitch(e.target.checked ? 1 : 0);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </AutoSelectPlayer>
              <AutoSelectPlayer>
                <p>Автораспределение ролей</p>{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={autopadbor}
                    onChange={(e) => {
                      setAutopadbor(e.target.checked ? 1 : 0);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </AutoSelectPlayer>
              <AutoSelectPlayer>
                <p>Push-уведомления</p>{" "}
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={auto_roll}
                    onChange={(e) => {
                      setAuto_roll(e.target.checked ? 1 : 0);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </AutoSelectPlayer>
            </SwitchDiv>
            <Link
              to="/payment"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <AutoSelectPlayer>
                <p>Подписка</p>
                <img src={Arrow} alt="" />
              </AutoSelectPlayer>
            </Link>
            <Link
              to="/payment-history"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <AutoSelectPlayer>
                <p>История оплат</p>
                <img src={Arrow} alt="" />
              </AutoSelectPlayer>
            </Link>
            <AutoSelectPlayerAccount>
              <span onClick={() => setIsOpenModal(true)}>Выйти с аккаунта</span>
            </AutoSelectPlayerAccount>
            <ModalApp
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
              isOpenProps={isOpenModal}
              onRequestCloseProps={() => setIsOpenModal(false)}
              setIsOpenModalProps={() => setIsOpenModal(false)}
              closeTimeoutMS={500}
              spanText="Вы действительно хотите выйти со своего аккаунта?"
              leaveApp="Да, выйти"
              cancle="Отмена"
              cancel
              ModalImg

              // spanText
            ></ModalApp>
          </AutoSelectPlayerWrapp>
        </AppMAIN>
        <AppFooter>
          <AutoSelectSave>
            <button className="appBtnGreen" type="submit">
              Сохранить
            </button>
          </AutoSelectSave>
        </AppFooter>
      </form>
    </div>
  );
};
export default Setting;
