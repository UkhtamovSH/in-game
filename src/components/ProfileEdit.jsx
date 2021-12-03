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
  SkeletonInput,
} from "../styles/Global.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { ProfileHeaderFlex, ProfileRadioDiv } from "../styles/Profile.styled";
import Profile2 from "../assets/svg/Profile2.svg";
import Calendar from "../assets/svg/Calendar.svg";
import SoccerBall from "../assets/svg/soccerball.svg";
import SoccerShoe from "../assets/svg/soccershoe.svg";
import Location from "../assets/svg/Location.svg";
import PhoneInput from "react-phone-input-2";
import CallProfile from "../assets/svg/CallProfile.svg";
import React, { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GetAuthInstance } from "../helpers/httpClient";
import _, { get } from "lodash";
import DefaultImg from "../assets/Img/default.png";
import DefaultClub from "../assets/Img/defaultClub.png";
import SearchLine from "../assets/svg/SearchLine.svg";
import Modal from "./sections/Modal";
import {
  ModalCountSection,
  RadioInputFlex,
  RadioInputFlexTop,
} from "../styles/Modal.styled";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProfileEdit = () => {
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
  const changeUserInfo = (e) => {
    const { value, name } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };
  const [playerPosition, setPlayerPosition] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalCount, setModalCount] = useState(null);
  const ref = useRef(null);
  const [nextUrlClubs, setNextUrlClubs] = useState("");
  const [clubs, setClubs] = useState([]);
  const [searchClubs, setSearchClubs] = useState("");
  const [nextUrlCities, setNextUrlCities] = useState("");
  const [cities, setCities] = useState([]);
  const [searchCities, setSearchCities] = useState("");
  const [nextUrlRegions, setNextUrlRegions] = useState("");
  const [regions, setRegions] = useState([]);
  const [searchRegions, setSearchRegions] = useState("");
  const [loading, setLoading] = useState(false);
  const [typingTimeOut, setTypingTimeOut] = useState(0);
  const [updateLists, setUpdateLists] = useState([]);

  const findRegion = regions.find(({ id }) => id === region?.id);
  const selectedRegion = findRegion
    ? findRegion
    : { name: "Tumaningizni tanlang" };

  const toggleModal = () => {
    if (modal) {
      setSearchClubs("");
    }
    setModal(!modal);
  };
  const modalCountToggle = (i) => setModalCount(i);

  const handleUpdate = (e) => {
    e.preventDefault();
    var formData = new FormData();
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
      })
      .catch((err) => {});
  };

  const handleImgChange = (e) => {
    var formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    GetAuthInstance()
      .post("/api/v1/edit-profil-image/", formData)
      .then((result) => {
        setUserProfile({ ...userProfile, avatar: result?.data?.data?.avatar });
      })
      .catch((err) => {});
  };
  const handleImgDelete = () => {
    var formData = new FormData();
    formData.append("avatar_delete", true);
    GetAuthInstance()
      .post("/api/v1/edit-profil-image/", formData)
      .then((result) => {
        setUserProfile({ ...userProfile, avatar: "" });
      })
      .catch((err) => {});
  };
  const getUser = () => {
    setLoading(true);
    GetAuthInstance()
      .get("/api/v1/get-user/")
      .then((response) => {
        if (response.status === 200) {
          setUserProfile(response.data.data);
          setLoading(false);
        }
      })
      .catch((error) => {});
  };
  const getPosition = () => {
    GetAuthInstance()
      .get(`/api/v1/position/`)
      .then((response) => {
        if (response.status === 200) {
          setPlayerPosition(response.data.results);
        }
      })
      .catch((error) => {});
  };
  const getClubs = (
    page = 1,
    next_url = `/api/v1/football-club/?page=${page}&per_page=20`,
    search = ""
  ) => {
    let s = "";
    if (search) {
      s = "&search=" + search;
    }
    GetAuthInstance()
      .get(next_url + s)
      .then((response) => {
        if (response.status === 200) {
          const result =
            page === 1
              ? response.data.results
              : [...clubs, ...response.data.results];
          setClubs(result);
          setNextUrlClubs(response.data.next);
        }
      })
      .catch((error) => {
        setClubs([]);
      });
  };

  const getCities = (
    page = 1,
    next_url = `/api/v1/region/parent/?page=${page}&per_page=20`,
    search = ""
  ) => {
    let s = "";
    if (search) {
      s = "&search=" + search;
    }
    GetAuthInstance()
      .get(next_url + s)
      .then((response) => {
        if (response.status === 200) {
          const result =
            page === 1
              ? response.data.results
              : [...cities, ...response.data.results];
          setCities(result);
          setNextUrlCities(response.data.next);
        }
      })
      .catch((err) => {
        setCities([]);
      });
  };
  const getRegions = (
    page = 1,
    next_url = `/api/v1/region?page=${page}&per_page=20&city=${city?.id}`,
    search = ""
  ) => {
    let s = "";
    if (search) {
      s = "&search=" + search;
    }
    GetAuthInstance()
      .get(next_url + s)
      .then((response) => {
        if (response.status === 200) {
          const result =
            page === 1
              ? response.data.results
              : [...regions, ...response.data.results];
          setRegions(result);
          setNextUrlRegions(response.data.next);
        }
      })
      .catch((err) => {
        setRegions([]);
      });
  };

  useEffect(() => {
    getPosition();
    getClubs();
    getUser();
    getCities();
  }, []);
  useEffect(() => {
    getRegions();
  }, [city]);

  const handleSearch = (e) => {
    setSearchClubs(e.target.value);
    let page = 1;
    let next_url = `/api/v1/football-club/?page=${page}&per_page=20`;
    setTypingTimeOut(
      setTimeout(() => {
        getClubs(page, next_url, e.target.value);
      }, 1000)
    );
    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const handleSearchCities = (e) => {
    setSearchCities(e.target.value);
    let page = 1;
    let next_url = `/api/v1/region/parent/?page=${page}&per_page=20`;
    setTypingTimeOut(
      setTimeout(() => {
        getCities(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const handleSearchRegions = (e) => {
    setSearchRegions(e.target.value);
    let page = 1;
    let next_url = `api/v1/region?page=${page}&per_page=20&city=41`;
    setTypingTimeOut(
      setTimeout(() => {
        getRegions(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  const modalClose = (
    <span onClick={toggleModal} style={{ cursor: "pointer" }}>
      <img src={ArrowRight} alt="" />
    </span>
  );

  const titleClubsForm = "Список клубов";
  const titlePositionForm = "Позиция в игре";
  const titleRegionForm = "Выберите регион";
  const titleCityForm = "Выберите город";

  return (
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
              <ProfileHeaderFlex>
                <div className="profileHeaderFlexSub1">
                  <img
                    src={avatar ? avatar : DefaultImg}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = DefaultImg;
                    }}
                    alt=""
                  />
                </div>
                <div
                  className="profileHeaderFlexSub2"
                  style={{ transform: "translate(0,10px)" }}
                >
                  <p>Ваше изображение</p>
                  <div className="text12Flex">
                    <span className="text1" style={{ width: "100px" }}>
                      <label htmlFor="files">Изменить</label>
                      <input
                        id="files"
                        style={{ visibility: "hidden" }}
                        type="file"
                        accept="image/*"
                        onChange={handleImgChange}
                      />
                    </span>
                    <span className="text2" onClick={handleImgDelete}>
                      Удалить
                    </span>
                  </div>
                </div>
              </ProfileHeaderFlex>
              <InputFormFlex>
                <span className="span1">
                  <span>
                    <img src={Profile2} alt="" />
                  </span>
                </span>
                <input
                  onChange={(e) => changeUserInfo(e)}
                  // onFocus={() => onFocus("fullName_error")}
                  value={full_name}
                  type="text"
                  name="full_name"
                  placeholder="Полное имя"
                />
                <span className="span2"></span>
              </InputFormFlex>
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
                  {selectedRegion?.name}
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
                  ? titleClubsForm
                  : modalCount === 2
                  ? titlePositionForm
                  : modalCount === 3
                  ? titleCityForm
                  : modalCount === 4
                  ? titleRegionForm
                  : null
              }
            >
              {modalCount === 1 ? (
                <>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={SearchLine} alt="" />
                      </span>
                    </span>
                    <input
                      ref={ref}
                      type="text"
                      onChange={handleSearch}
                      value={searchClubs}
                      placeholder="Введите название команды"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>

                  <InfiniteScroll
                    dataLength={clubs.length}
                    next={() => {
                      getClubs(2, nextUrlClubs);
                    }}
                    hasMore={nextUrlClubs ? true : false}
                    loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                  >
                    <RadioInputFlexTop>
                      {clubs
                        ? clubs.map((club, index) => {
                            const { id, name, image } = club;
                            return (
                              <RadioInputFlex key={index}>
                                <label className="gg" htmlFor={id}>
                                  <img
                                    src={
                                      image
                                        ? image
                                        : image === null
                                        ? DefaultClub
                                        : DefaultClub
                                    }
                                    style={{
                                      width: "32px",
                                      height: "32px",
                                    }}
                                    alt=""
                                  />
                                  <span
                                    style={{
                                      marginLeft: "8px",
                                    }}
                                  >
                                    {name}
                                  </span>
                                </label>
                                <input
                                  type="radio"
                                  id={id}
                                  name="football_club"
                                  onChange={() => {
                                    setUserProfile({
                                      ...userProfile,
                                      football_club: club,
                                    });
                                    toggleModal();
                                  }}
                                  checked={
                                    id === football_club?.id ? "checked" : ""
                                  }
                                />
                              </RadioInputFlex>
                            );
                          })
                        : null}
                    </RadioInputFlexTop>
                  </InfiniteScroll>
                </>
              ) : modalCount === 2 ? (
                <>
                  <RadioInputFlexTop>
                    {playerPosition
                      ? playerPosition.map((playerPos, index) => {
                          const { id, name } = playerPos;
                          return (
                            <RadioInputFlex key={index}>
                              <label className="gg" htmlFor={id}>
                                <span>{name}</span>
                              </label>
                              <input
                                type="radio"
                                id={id}
                                name="position"
                                onChange={() => {
                                  setUserProfile({
                                    ...userProfile,
                                    position: id,
                                  });
                                  toggleModal();
                                }}
                                checked={id === position ? "checked" : ""}
                              />
                            </RadioInputFlex>
                          );
                        })
                      : null}
                  </RadioInputFlexTop>
                </>
              ) : modalCount === 3 ? (
                <>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={SearchLine} alt="" />
                      </span>
                    </span>
                    <input
                      type="text"
                      ref={ref}
                      onChange={handleSearchCities}
                      value={searchCities}
                      placeholder="Введите название городы"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InfiniteScroll
                    dataLength={cities.length}
                    next={() => {
                      getCities(2, nextUrlCities);
                    }}
                    hasMore={nextUrlCities ? true : false}
                    loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                  >
                    <RadioInputFlexTop>
                      {cities
                        ? cities.map((c, index) => {
                            const { id, name } = c;
                            return (
                              <RadioInputFlex key={index}>
                                <label className="gg" htmlFor={id}>
                                  <span>{name}</span>
                                </label>
                                <input
                                  type="radio"
                                  id={id}
                                  name="city"
                                  onChange={() => {
                                    setUserProfile({
                                      ...userProfile,
                                      city: c,
                                    });
                                    toggleModal();
                                  }}
                                  checked={id === city?.id ? "checked" : ""}
                                />
                              </RadioInputFlex>
                            );
                          })
                        : null}
                    </RadioInputFlexTop>
                  </InfiniteScroll>
                </>
              ) : modalCount === 4 ? (
                <>
                  <InputFormFlex>
                    <span className="span1">
                      <span>
                        <img src={SearchLine} alt="" />
                      </span>
                    </span>
                    <input
                      type="text"
                      ref={ref}
                      onChange={handleSearchRegions}
                      value={searchRegions}
                      placeholder="Введите название регионы"
                    />
                    <span className="span2"></span>
                  </InputFormFlex>
                  <InfiniteScroll
                    dataLength={regions.length}
                    next={() => {
                      getRegions(2, nextUrlRegions);
                    }}
                    hasMore={nextUrlRegions ? true : false}
                    loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                  >
                    <RadioInputFlexTop>
                      {regions
                        ? regions.map((r, index) => {
                            const { id, name } = r;
                            return (
                              <RadioInputFlex key={index}>
                                <label className="gg" htmlFor={id}>
                                  <span>{name}</span>
                                </label>
                                <input
                                  type="radio"
                                  id={id}
                                  name="region"
                                  onChange={() => {
                                    setUserProfile({
                                      ...userProfile,
                                      region: r,
                                    });
                                    toggleModal();
                                  }}
                                  checked={id === region?.id ? "checked" : ""}
                                />
                              </RadioInputFlex>
                            );
                          })
                        : null}
                    </RadioInputFlexTop>
                  </InfiniteScroll>
                </>
              ) : null}
            </Modal>
          ) : (
            ""
          )}
        </>
      )}
    </>
  );
};

export default ProfileEdit;
