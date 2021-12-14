import React, { useState } from "react";
import { Link } from "react-router-dom";
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
  AutoSelectSave,
} from "../../styles/Setting.styled";

import { styled } from "@mui/system";
import SwitchUnstyled, {
  switchUnstyledClasses,
} from "@mui/base/SwitchUnstyled";
import ModalApp from "./ModalApp";

const Setting = () => {
  const Root = styled("span")`
    font-size: 0;
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
    cursor: pointer;

    &.${switchUnstyledClasses.disabled} {
      opacity: 0.4;
      cursor: not-allowed;
    }

    & .${switchUnstyledClasses.track} {
      background: #252525;
      border-radius: 10px;
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
    }

    & .${switchUnstyledClasses.thumb} {
      display: block;
      width: 16px;
      height: 16px;
      top: 4px;
      left: 4px;
      border-radius: 16px;
      background-color: #333333;
      position: relative;
      transition: all 200ms ease;
    }

    &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
      background-color: rgba(255, 255, 255, 1);
      box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
    }

    &.${switchUnstyledClasses.checked} {
      .${switchUnstyledClasses.thumb} {
        left: 21px;
        top: 4px;
        background-color: #fff;
      }

      .${switchUnstyledClasses.track} {
        background: #0eb800;
      }
    }

    & .${switchUnstyledClasses.input} {
      cursor: inherit;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      z-index: 1;
      margin: 0;
    }
  `;

  const [isOpenModal, setIsOpenModal] = useState(false);

  isOpenModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

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
      <AppMAIN>
        <AutoSelectPlayerWrapp>
          <AutoSelectPlayer>
            <p>Автоподбор игроков</p>
            <SwitchUnstyled component={Root} defaultChecked />
          </AutoSelectPlayer>
          <AutoSelectPlayer>
            <p>Автораспределение ролей</p>
            <SwitchUnstyled component={Root} />
          </AutoSelectPlayer>
          <AutoSelectPlayer>
            <p>Push-уведомления</p>
            <SwitchUnstyled component={Root} />
          </AutoSelectPlayer>
          <AutoSelectPlayer>
            <p>Подписка</p>
            <img src={Arrow} alt="" />
          </AutoSelectPlayer>
          <AutoSelectPlayer>
            <p>История оплат</p>
            <img src={Arrow} alt="" />
          </AutoSelectPlayer>
          <AutoSelectPlayerAccount>
            <span onClick={() => setIsOpenModal(true)}>Выйти с аккаунта</span>
          </AutoSelectPlayerAccount>
          <ModalApp
            isOpenProps={isOpenModal}
            onRequestCloseProps={() => setIsOpenModal(false)}
            setIsOpenModalProps={() => setIsOpenModal(false)}
          ></ModalApp>
        </AutoSelectPlayerWrapp>
      </AppMAIN>
      <AppFooter>
        <AutoSelectSave>
          <div className="appBtnGreen">Сохранить</div>
        </AutoSelectSave>
      </AppFooter>
    </div>
  );
};

export default Setting;
