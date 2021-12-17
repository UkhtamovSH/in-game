import {
  AppHeader,
  AppHeaderFlex,
  AppHeaderFlex2PRating,
  AppMAIN,
} from "../../../styles/ContainerFluid.styled";
import ArrowRight from "../../../assets/svg/Arrow - Right.svg";
import styled from "styled-components";
import { InputFormFlex } from "../../../styles/Global.styled";
import SearchLine from "../../../assets/svg/SearchLine.svg";
import { useState } from "react";
import { get } from "lodash";

const MList = styled.div`
  margin: 0;
  padding: 6px 0;
  text-align: center;
  font-family: "Manrope-SemiBold", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  border-top: 0.5px solid #a4a6a6;
  cursor: pointer;
`;

const MinutesList = (props) => {
  const { toggleModal, munitesList, takeMinute } = props;
  const [anotherFilterMinute, setAnotherFilterMinute] = useState([]);
  const [filterMinutes, setFilterMinutes] = useState("");

  const sFilterMinutes = (e) => {
    setFilterMinutes(e.target.value);
  };

  const filtered = !filterMinutes
    ? munitesList
    : munitesList.filter((minute) => minute.includes(filterMinutes));

  return (
    <>
      <AppHeader style={{ padding: "12px 0 0 0" }}>
        <AppHeaderFlex>
          <div
            onClick={toggleModal}
            style={{ transform: "translate(17px,0)", cursor: "pointer" }}
          >
            <img src={ArrowRight} alt="" />
          </div>
          <div className="">
            <span>Длительность игры</span>
          </div>
          <div className="" />
        </AppHeaderFlex>
        <AppHeaderFlex2PRating>
          <InputFormFlex
            style={{ marginBottom: "5px!important", height: "20px" }}
          >
            <span className="span1">
              <span>
                <img src={SearchLine} alt="" />
              </span>
            </span>
            <input
              type="text"
              onChange={(e) => sFilterMinutes(e)}
              value={filterMinutes}
              placeholder="Введите минут"
            />
            <span className="span2"></span>
          </InputFormFlex>
        </AppHeaderFlex2PRating>
      </AppHeader>
      <AppMAIN
        style={{
          marginTop: "120px",
        }}
      >
        {filtered.map((mL, index) => {
          const { name } = mL;
          return (
            <div key={index}>
              <MList
                onClick={() => {
                  takeMinute(name);
                  toggleModal();
                }}
              >
                {name} мин
              </MList>
            </div>
          );
        })}
      </AppMAIN>
    </>
  );
};

export default MinutesList;
