import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowRight from "../../assets/svg/Arrow - Right.svg";
import Arrow from "../../assets/Img/Arrow - Right 2.png";
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
  SettingsLanguageFlex,
} from "../../styles/Setting.styled";
import { SwitchDiv } from "./Switch.styled";
import { GetAuthInstance } from "../../helpers/httpClient";
import { get } from "lodash";
import { PossibleModal } from "../../styles/NewGame.styled";
import { StylesHidden } from "../../styles/Global.styled";
import { useTranslation } from "react-i18next";
import { getLanguage } from "../../helpers/language";
import { removeToken } from "../../helpers/tokenStorage";

const Setting = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [notif, setNotif] = useState(0);
  const [autopadbor, setAutopadbor] = useState(0);
  const [auto_roll, setAuto_roll] = useState(0);
  // const [updatedLists, setUpdatedLists] = useState([]);

  // isOpenModal
  //   ? (document.body.style.overflow = "hidden")
  //   : (document.body.style.overflow = "unset");

  const [setData] = useState([]);
  const history = useNavigate();

  const { t, i18n } = useTranslation();
  const lan = getLanguage();

  const onLanguageHandle = (newLang) => {
    i18n.changeLanguage(newLang);
    window.localStorage.setItem("language", newLang);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData();

    dataForm.append("notification", notif);
    dataForm.append("autopadbor", autopadbor);
    dataForm.append("auto_roll", auto_roll);

    GetAuthInstance()
      .post("api/v1/user-settings/", dataForm)
      .then((res) => {
        history("/");
      })
      .catch((err) => {});
  };
  const getData = () => {
    GetAuthInstance()
      .get("/api/v1/user-settings/")
      .then((res) => {
        setData(res);
        const notif = get(res, "data.data.notification", false);
        const auto_roll = get(res, "data.data.auto_roll", false);
        const autopadbor = get(res, "data.data.autopadbor", false);
        if (notif) {
          setNotif(1);
        }
        if (auto_roll) {
          setAuto_roll(1);
        }
        if (autopadbor) {
          setAutopadbor(1);
        }
      })
      .catch((err) => {});
  };

  const clickModal = () => setIsOpenModal(!isOpenModal);
  const logOut = () => {
    removeToken();
    history("/");
  };

  useEffect(() => {
    getData();
  }, []);

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
            <span>{t("rateSection.ratePlayer")}</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <form onSubmit={(e) => handleSubmit(e)}>
        <AppMAIN>
          <AutoSelectPlayerWrapp>
            <SwitchDiv>
              <SettingsLanguageFlex>
                <div className="" onClick={() => onLanguageHandle("uz")}>
                  {t("navbar.uz")}
                </div>
                <div className="" onClick={() => onLanguageHandle("ru")}>
                  {t("navbar.ru")}
                </div>
                <div className="" onClick={() => onLanguageHandle("en")}>
                  {t("navbar.en")}
                </div>
              </SettingsLanguageFlex>
              <AutoSelectPlayer>
                <p>Push-??????????????????????</p>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={notif}
                    onChange={(e) => {
                      setNotif(e.target.checked ? 1 : 0);
                    }}
                  />
                  <span className="slider round"></span>
                </label>
              </AutoSelectPlayer>
              <AutoSelectPlayer>
                <p>???????????????????? ?????????????? </p>{" "}
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
                <p> ?????????????????????????????????? ?????????? </p>{" "}
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
                <p>????????????????</p>
                <img src={Arrow} alt="" />
              </AutoSelectPlayer>
            </Link>
            <Link
              to="/payment-history"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <AutoSelectPlayer>
                <p>?????????????? ??????????</p>
                <img src={Arrow} alt="" />
              </AutoSelectPlayer>
            </Link>
            <AutoSelectPlayerAccount>
              <span onClick={clickModal}>?????????? ?? ????????????????</span>
            </AutoSelectPlayerAccount>
          </AutoSelectPlayerWrapp>
        </AppMAIN>
        <AppFooter>
          <button className="appBtnGreen" type="submit">
            {t("rateSection.save")}
          </button>
        </AppFooter>
        {isOpenModal ? (
          <PossibleModal>
            <div className="">
              <div className="possibleModalSub">
                <div className="sub1">
                  <p>???? ?????????????????????????? ???????????? ?????????? ???? ???????????? ?????????????????</p>
                </div>
                <div className="sub3">
                  <div className="sub2BtnGroup">
                    <div onClick={logOut}>????, ??????????</div>
                    <div style={{ width: "0px", padding: "0" }} />
                    <div onClick={clickModal}>????????????????</div>
                  </div>
                </div>
              </div>
            </div>
            <StylesHidden />
          </PossibleModal>
        ) : null}
      </form>
    </div>
  );
};
export default Setting;
