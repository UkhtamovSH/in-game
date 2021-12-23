import React from "react";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { PayHistoryDiv } from "../styles/PaymeHistory.style";

function PaymeHistory() {
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
            <span>История оплат</span>
          </div>
          <div />
        </AppHeaderFlex>
      </AppHeader>
      <AppMAIN style={{ padding: "15px" }}>
        <PayHistoryDiv>
          <span>Название подписки</span>
          <div className="status">
            <p>Статус</p>
            <label>Оплачено</label>
          </div>
          <div className="status">
            <p>Дата</p>
            <span>24 сентября 2021</span>
          </div>
          <div className="status">
            <p>Сумма</p>
            <span>24 990 сум</span>
          </div>
        </PayHistoryDiv>
        <PayHistoryDiv>
          <span>Название подписки</span>
          <div className="status">
            <p>Статус</p>
            <label>В ожидании</label>
          </div>
          <div className="status">
            <p>Дата</p>
            <span>24 сентября 2021</span>
          </div>
          <div className="status">
            <p>Сумма</p>
            <span>24 990 сум</span>
          </div>
        </PayHistoryDiv>
      </AppMAIN>
    </div>
  );
}

export default PaymeHistory;
