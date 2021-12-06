import { Link } from "react-router-dom";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import {
  CustomRadio,
  InputFormFlex,
  SContainer,
  SContainerFooter,
  SContainerHeader,
} from "../styles/Global.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { ProfileRadioDiv } from "../styles/Profile.styled";
import Profile2 from "../assets/svg/Profile2.svg";
import Calendar from "../assets/svg/Calendar.svg";
import SoccerBall from "../assets/svg/soccerball.svg";
import SoccerShoe from "../assets/svg/soccershoe.svg";
import Location from "../assets/svg/Location.svg";
import CallProfile from "../assets/svg/CallProfile.svg";
import React, { useEffect, useState } from "react";
import { GetAuthInstance } from "../helpers/httpClient";
import Modal from "./sections/Modal";
import styled, { createGlobalStyle } from "styled-components";
import ChangeProfileImg from "../components/sections/editprofile/ChangeProfileImg";
import SelectProfileClubs from "../components/sections/editprofile/SelectProfileClubs";
import SelectProfilePositions from "../components/sections/editprofile/SelectProfilePositions";
import SelectProfileCities from "../components/sections/editprofile/SelectProfileCities";
import SelectProfileRegions from "../components/sections/editprofile/SelectProfileRegions";

const Styles = createGlobalStyle`
	body {
		overflow: hidden !important;
	}
`;
const SContainerMainProfEdit = styled.div`
  margin-top: 93px;
  margin-bottom: 82px;
  padding-bottom: 10px;
  & .sTopProfileEditFlex {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    & .sTopFlexSub1 {
      width: 80px;
      height: 64px;
      border-radius: 50%;
      background-color: #484343;
      overflow: hidden;
    }
    & .sTopFlexSub2 {
      margin-left: 15px;
      width: 100%;
      & div {
        width: 100%;
        height: 25px;
        background-color: #484343;
        border-radius: 12px;
        overflow: hidden;
        &:nth-child(1) {
          margin-bottom: 8px;
        }
      }
    }
  }
  .sMainProfEditDivFlex {
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    & div {
      overflow: hidden;
      height: 30px;
      width: 100%;
      background-color: #484343;
      border-radius: 12px;
      &:nth-child(2) {
        margin-left: 15px;
      }
    }
  }
  .sMainProfEditDiv {
    height: 40px;
    width: 100%;
    background-color: #484343;
    border-radius: 12px;
    margin-top: 15px;
    overflow: hidden;
  }
`;

const ProfileEdit = () => {
  const [playerPosition, setPlayerPosition] = useState([]);
  const [modalCount, setModalCount] = useState(null);
  const [nextUrlClubs, setNextUrlClubs] = useState("");
  const [clubs, setClubs] = useState([]);
  const [searchClubs, setSearchClubs] = useState("");
  const [nextUrlCities, setNextUrlCities] = useState("");
  const [cities, setCities] = useState([]);
  const [searchCities, setSearchCities] = useState("");
  const [nextUrlRegions, setNextUrlRegions] = useState("");
  const [regions, setRegions] = useState([]);
  const [searchRegions, setSearchRegions] = useState("");
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const [updateLists, setUpdateLists] = useState([]);
  const [preLoading, setPreLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [userProfile, setUserProfile] = useState({
    full_name: "",
    birth_date: "",
    football_club: "",
    position: "",
    city: { id: "", name: "" },
    region: { id: "", name: "" },
    phone: "",
    gender: "man",
    avatar: "",
  });
  const {
    full_name,
    birth_date,
    football_club,
    position,
    city,
    region,
    phone,
    gender,
    avatar,
  } = userProfile;

  const [errors, setErrors] = useState({
    fullNameError: false,
  });
  const { fullNameError } = errors;
  const onFocus = (name) => setErrors({ ...errors, [name]: false });

  // ******modal functions start******
  const toggleModal = () => {
    if (modal) {
      setSearchClubs("");
      setSearchCities("");
      setSearchRegions("");
    }
    setModal(!modal);
  };
  const modalCountToggle = (i) => setModalCount(i);
  const modalClose = (
    <span onClick={toggleModal} style={{ cursor: "pointer" }}>
      <img src={ArrowRight} alt="" />
    </span>
  );
  // ******modal functions end******

  const changeUserInfo = (e) => {
    const { value, name } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setPreLoading(true);
    if (full_name.length > 2) {
      const formData = new FormData();
      formData.append("full_name", full_name);
      formData.append("gender", gender);
      formData.append("birth_date", birth_date);
      formData.append("football_club", football_club?.id);
      formData.append("position", position);
      formData.append("city", city?.id);
      formData.append("region", region?.id);
      GetAuthInstance()
        .post("/api/v1/edit-profil/", formData)
        .then((response) => {
          setUpdateLists([...updateLists, response.formData]);
          setUserProfile({ ...userProfile });
          setPreLoading(false);
        })
        .catch((err) => {});
    } else if (full_name.length < 3) {
      setErrors({
        ...errors,
        fullNameError: true,
      });
      setPreLoading(false);
    }
  };

  const getUser = () => {
    setPreLoading(true);
    GetAuthInstance()
      .get("/api/v1/get-user/")
      .then((response) => {
        if (response.status === 200) {
          setUserProfile(response.data.data);
        }
      })
      .catch((error) => {})
      .finally(() => setPreLoading(false));
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      {preLoading ? (
        <SContainer>
          <SContainerHeader>
            <div className="subSkeletonHeader beforeAnimation" />
          </SContainerHeader>
          <SContainerMainProfEdit>
            <div className="sTopProfileEditFlex">
              <div className="sTopFlexSub1 beforeAnimation"></div>
              <div className="sTopFlexSub2">
                <div className="beforeAnimation"></div>
                <div className="beforeAnimation"></div>
              </div>
            </div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
            <div className="sMainProfEditDivFlex">
              <div className="beforeAnimation"></div>
              <div className="beforeAnimation"></div>
            </div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
            <div className="sMainProfEditDiv beforeAnimation"></div>
          </SContainerMainProfEdit>
          <SContainerFooter>
            <div className="subSkeletonFooter beforeAnimation" />
          </SContainerFooter>
          <Styles />
        </SContainer>
      ) : (
        <>
          {!modal ? (
            <>
              <AppHeader>
                <AppHeaderFlex>
                  <div className="">
                    <Link to="/" className="">
                      <img src={ArrowRight} alt="" />
                    </Link>
                  </div>
                  <div className="">
                    <span>Изменение данных</span>
                  </div>
                  <div />
                </AppHeaderFlex>
              </AppHeader>
              <form onSubmit={(e) => handleUpdate(e)}>
                <AppMAIN>
                  <ChangeProfileImg
                    setUserProfile={setUserProfile}
                    userProfile={userProfile}
                    avatar={avatar}
                  />
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Profile2} alt="" />
                      </span>
                    </span>
                    <input
                      onChange={(e) => {
                        changeUserInfo(e);
                        onFocus("fullNameError");
                      }}
                      onFocus={() => onFocus("fullNameError")}
                      value={full_name}
                      type="text"
                      name="full_name"
                      placeholder="Полное имя"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  {fullNameError ? (
                    <span className="inputError">Kamida 2 ta belgi</span>
                  ) : null}
                  <CustomRadio>
                    <ProfileRadioDiv>
                      <div>
                        <input
                          type="radio"
                          id="test1"
                          name="gender"
                          value="man"
                          onChange={() =>
                            setUserProfile({ ...userProfile, gender: "man" })
                          }
                          checked={gender === "man" ? "checked" : ""}
                        />
                        <label htmlFor="test1">Мужчина</label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          id="test2"
                          name="gender"
                          value="woman"
                          onChange={() =>
                            setUserProfile({ ...userProfile, gender: "woman" })
                          }
                          checked={gender === "woman" ? "checked" : ""}
                        />
                        <label htmlFor="test2">Женщина</label>
                      </div>
                    </ProfileRadioDiv>
                  </CustomRadio>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Calendar} alt="" />
                      </span>
                    </span>
                    <input
                      type="date"
                      name="birth_date"
                      value={birth_date}
                      onChange={(e) => changeUserInfo(e)}
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={CallProfile} alt="" />
                      </span>
                    </span>
                    <input type="text" value={phone} disabled />
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={SoccerBall} alt="" />
                      </span>
                    </span>
                    <span
                      onClick={() => {
                        modalCountToggle(1);
                        toggleModal();
                      }}
                      className="spanInput"
                    >
                      {football_club?.name}
                    </span>
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={SoccerShoe} alt="" />
                      </span>
                    </span>
                    <span
                      onClick={() => {
                        modalCountToggle(2);
                        toggleModal();
                      }}
                      className="spanInput"
                    >
                      {position === 1
                        ? "Goalkeeper"
                        : position === 2
                        ? "Defender"
                        : position === 4
                        ? "Forward"
                        : position === 3
                        ? "Midfielder"
                        : null}
                    </span>
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Location} alt="" />
                      </span>
                    </span>
                    <span
                      onClick={() => {
                        modalCountToggle(3);
                        toggleModal();
                      }}
                      className="spanInput"
                    >
                      {city?.name}
                    </span>
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={Location} alt="" />
                      </span>
                    </span>
                    <span
                      onClick={() => {
                        modalCountToggle(4);
                        toggleModal();
                      }}
                      className="spanInput"
                    >
                      {region?.name}
                    </span>
                    <span className="span2"></span>
                  </InputFormFlex>
                </AppMAIN>
                <AppFooter>
                  <button type="submit" className="appBtnGreen">
                    Сохранить изменения
                  </button>
                </AppFooter>
              </form>
            </>
          ) : (
            <>
              {modal ? (
                <Modal
                  link={modalClose}
                  title={
                    modalCount === 1
                      ? "Список клубов"
                      : modalCount === 2
                      ? "Позиция в игре"
                      : modalCount === 3
                      ? "Выберите регион"
                      : modalCount === 4
                      ? "Выберите город"
                      : null
                  }
                >
                  {modalCount === 1 ? (
                    <SelectProfileClubs
                      clubs={clubs}
                      setClubs={setClubs}
                      setNextUrlClubs={setNextUrlClubs}
                      nextUrlClubs={nextUrlClubs}
                      setSearchClubs={setSearchClubs}
                      searchClubs={searchClubs}
                      setTypingTimeOut={setTypingTimeOut}
                      typingTimeOut={typingTimeOut}
                      setUserProfile={setUserProfile}
                      userProfile={userProfile}
                      toggleModal={toggleModal}
                      football_club={football_club}
                    />
                  ) : modalCount === 2 ? (
                    <SelectProfilePositions
                      playerPosition={playerPosition}
                      setUserProfile={setUserProfile}
                      userProfile={userProfile}
                      toggleModal={toggleModal}
                      position={position}
                      setPlayerPosition={setPlayerPosition}
                    />
                  ) : modalCount === 3 ? (
                    <SelectProfileCities
                      setSearchCities={setSearchCities}
                      setTypingTimeOut={setTypingTimeOut}
                      typingTimeOut={typingTimeOut}
                      cities={cities}
                      setCities={setCities}
                      setNextUrlCities={setNextUrlCities}
                      nextUrlCities={nextUrlCities}
                      searchCities={searchCities}
                      setUserProfile={setUserProfile}
                      userProfile={userProfile}
                      toggleModal={toggleModal}
                      city={city}
                    />
                  ) : modalCount === 4 ? (
                    <SelectProfileRegions
                      city={city}
                      setSearchRegions={setSearchRegions}
                      setTypingTimeOut={setTypingTimeOut}
                      regions={regions}
                      setRegions={setRegions}
                      setNextUrlRegions={setNextUrlRegions}
                      typingTimeOut={typingTimeOut}
                      searchRegions={searchRegions}
                      nextUrlRegions={nextUrlRegions}
                      setUserProfile={setUserProfile}
                      userProfile={userProfile}
                      toggleModal={toggleModal}
                      region={region}
                    />
                  ) : null}
                </Modal>
              ) : (
                ""
              )}
            </>
          )}
        </>
      )}
      {console.log(modalCount)}
    </>
  );
};

export default ProfileEdit;
