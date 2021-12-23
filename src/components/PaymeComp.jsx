import React from "react";
import { Link } from "react-router-dom";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { PayDiv } from "../styles/PaymeComp.styled";
import PaymeImg from "../assets/Img/Frame 4220.png";
import ClickImg from "../assets/Img/Frame 4220 (1).png";
import PaynetImg from "../assets/Img/Frame 4220 (2).png";
import { useState } from "react";
import ModalPay from "./sections/ModalPay";
const PaymeComp = () => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [state, setState] = useState();
  const [error, setError] = useState();

  const handleSubmit = () => {
    if (state === "") {
      setError("error");
    }else{
      setError("")
    }
  };

  isOpenedModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

  return (
    <div>
      <AppHeader>
        <AppHeaderFlex>
          <div className="">
            <Link to="/setting" className="">
              <img src={ArrowRight} alt="" />
            </Link>
          </div>
          <div className="">
            <span>Подписка</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN>
        <PayDiv>
          <div class="container">
            <div class="row">
              <div className="colInput">
                <label>
                  <p>Cумма пополения </p>
                  <input value={state} type="number" className="inputPayme" />
                  <p>{error}</p>
                </label>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-4">
                <p style={{ marginTop: "30px" }}>Выберите спосб </p>
                <label>
                  <input
                    type="radio"
                    name="radio1"
                    class="card-input-element"
                  />
                  <div class="panel panel-default card-input">
                    <img src={PaymeImg} alt="" />
                    <div class="panel-body">Оплата через PayMe</div>
                  </div>
                </label>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-4">
                <label>
                  <div className="chechDiv">
                    <input
                      type="radio"
                      name="radio1"
                      class="card-input-element"
                    />

                    <div class="panel panel-default card-input">
                      <img src={ClickImg} alt="" />
                      <div class="panel-body">Оплата через Click</div>
                    </div>
                  </div>
                </label>
                <label>
                  <div className="chechDiv">
                    <input
                      type="radio"
                      name="radio1"
                      class="card-input-element"
                    />

                    <div class="panel panel-default card-input">
                      <img src={PaynetImg} alt="" />
                      <div class="panel-body">Оплата через PayNet</div>
                    </div>
                  </div>
                </label>
              </div>
              <div class="col-md-4 col-lg-4 col-sm-4"></div>
            </div>
            <ModalPay
              isOpenedProps={isOpenedModal}
              onRequestCloseProps={() => setIsOpenedModal(false)}
              setIsOpenModalProps={() => setIsOpenedModal(false)}
              errorText="введиту сумму"
            ></ModalPay>
            <div className="payment">
              <div className="summa">
                <p>Сумма к оплате:</p>
              </div>

              <div className="summaValue">
                <p>24 990 сум</p>
              </div>
            </div>
          </div>
        </PayDiv>
      </AppMAIN>
      <AppFooter>
        <div
          className="appBtnGreen"
          onClick={() => setIsOpenedModal(true)}
          // onClick={() => handleSubmit()}
        >
          Продолжить
        </div>
      </AppFooter>
    </div>
  );
};

export default PaymeComp;
