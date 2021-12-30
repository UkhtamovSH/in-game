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
import { useState } from "react";
import ModalPay from "./sections/ModalPay";
import { GetAuthInstance } from "../helpers/httpClient";
import { useEffect } from "react";
import { get } from "lodash";

const PaymeComp = () => {
  const [data, setData] = useState([]);
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [check, setCheck] = useState(0);
  const [payCom, setPayCom] = useState(0);
  const [clickErr, setClickErr] = useState("");
  const [PayMeErr] = useState("");

  const postData = () => {
    const dataForm = new FormData();
    dataForm.append("amount", inputVal);
    dataForm.append("pycom_type", payCom);

    GetAuthInstance()
      .post("api/v1/payment/generate-payment/", dataForm)
      .then((res) => {
        if (get(res, "data.url", "")) {
          window.location.href = get(res, "data.url", "");
        } else {
          setClickErr("Click xizmati hozirda ishlamayapti");
        }
      })
      .catch((err) => {});
  };
  const getData = (e) => {
    GetAuthInstance()
      .get("api/v1/payment/")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const onCheck = (e) => {
    e.preventDefault();

    if (!check === 1 || inputVal === "") {
      setIsOpenedModal(true);
    } else {
      setIsOpenedModal(false);
      postData();
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
          <div className="container">
            <div className="row">
              <div className="colInput">
                <label>
                  <p>Cумма пополения </p>
                  <input
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    type="number"
                    className="inputPayme"
                  />
                </label>
              </div>
              <div className="col-md-4 col-lg-4 col-sm-4">
                <p style={{ marginTop: "30px" }}>Выберите спосб </p>
                {data.map((item, index) => (
                  <label key={index}>
                    <input
                      type="radio"
                      name="radio1"
                      value={payCom}
                      className="card-input-element"
                      onChange={() => {
                        setCheck(1);
                        setPayCom(item.id);
                      }}
                    />
                    <div className="panel panel-default card-input">
                      <img src={item.image} alt="" />
                      <div className="panel-body">{item.name}</div>
                    </div>
                  </label>
                ))}
                {<p className="errorClick">{clickErr}</p>}
                {<p className="errorClick">{PayMeErr}</p>}
              </div>

              <div className="col-md-4 col-lg-4 col-sm-4"></div>
            </div>
            <ModalPay
              isOpenedProps={isOpenedModal}
              onRequestCloseProps={() => setIsOpenedModal(false)}
              setIsOpenModalProps={() => setIsOpenedModal(false)}
              errorText={
                inputVal > 999
                  ? "паймент типе отсутствует"
                  : !check
                  ? "введиту сумму "
                  : "введиту сумму"
              }
            ></ModalPay>
            {/* <div className="payment">
              <div className="summa">
                <p>Сумма к оплате:</p>
              </div>

              <div className="summaValue">
                <p>24 990 сум</p>
              </div>
            </div> */}
          </div>
        </PayDiv>
      </AppMAIN>
      <AppFooter>
        <div
          className="appBtnGreen"
          onClick={(e) => {
            onCheck(e);
          }}
        >
          Продолжить
        </div>
      </AppFooter>
    </div>
  );
};

export default PaymeComp;
