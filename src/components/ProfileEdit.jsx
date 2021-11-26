import { Link } from "react-router-dom";
import {
  AppFooter,
  AppHeader,
  AppHeaderFlex,
  AppMAIN,
} from "../styles/ContainerFluid.styled";
import { CustomRadio, InputFormFlex } from "../styles/Global.styled";
import ArrowRight from "../assets/svg/Arrow - Right.svg";
import { ProfileHeaderFlex, ProfileRadioDiv } from "../styles/Profile.styled";
import Profile2 from "../assets/svg/Profile2.svg";
import Calendar from "../assets/svg/Calendar.svg";
import SoccerBall from "../assets/svg/soccerball.svg";
import SoccerShoe from "../assets/svg/soccershoe.svg";
import Location from "../assets/svg/Location.svg";
import PhoneInput from "react-phone-input-2";
import CallProfile from "../assets/svg/CallProfile.svg";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GetAuthInstance } from "../helpers/httpClient";

const ProfileEdit = () => {
  const [userProfile, setUserProfile] = useState({
    full_name: "",
    birth_date: "",
    football_club: "",
    position: "",
    city: "",
    region: "",
    phone: "",
  });

  const {
    full_name,
    birth_date,
    football_club,
    position,
    city,
    region,
    phone,
  } = userProfile;

  const changeUserInfo = (e) => {
    const { value, name } = e.target;
    setUserProfile({
      ...userProfile,
      [name]: value,
    });
  };

  const [gender, setGender] = useState("man");
  // const [startDate, setStartDate] = useState(new Date());

  const [playerPosition, setPlayerPosition] = useState([
    {
      id: "",
      name: "",
    },
  ]);

  const [clubs, setClubs] = useState([
    {
      id: "",
      name: "",
    },
  ]);

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

  const getClubs = () => {
    GetAuthInstance()
      .get(`/api/v1/football-club/`)
      .then((response) => {
        if (response.status === 200) {
          setClubs(response.data.results);
        }
      })
      .catch((error) => {});
  };
  const handleUpdate = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getPosition();
    getClubs();
  }, []);

  // https://kasbiytalim.uz/api/v1/edit-profil/
  return (
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
      <AppMAIN>
        <form onSubmit={(e) => handleUpdate(e)}>
          <ProfileHeaderFlex>
            <div className="profileHeaderFlexSub1">
              <img
                src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
            <div className="profileHeaderFlexSub2">
              <p>Ваше изображение</p>
              <span className="text1">Изменить</span>
              <span className="text2">Удалить</span>
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
                  value={gender}
                  onClick={() => setGender("man")}
                  checked={gender === "man"}
                />
                <label htmlFor="test1">Мужчина</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="test2"
                  name="gender"
                  value={gender}
                  onClick={() => setGender("woman")}
                  checked={gender === "woman"}
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
            {/* <DatePicker
              dateFormat="yyyy-MM-dd"
              selected={startDate}
              name="birth_date"
              scrollableYearDropdown
              showFullMonthYearPicker
              onChange={(date) => setStartDate(date)}
              peekNextMonth
              dropdownMode="select"
            /> */}
            <span className="span2"></span>
          </InputFormFlex>
          <InputFormFlex>
            <span className="span1">
              <span>
                <img src={CallProfile} alt="" />
              </span>
            </span>
            <PhoneInput
              onChange={(e) => changeUserInfo(e)}
              // onFocus={() => onFocus("phone_error")}
              value={phone}
              inputExtraProps={{
                required: true,
                autoFocus: true,
              }}
              country={"uz"}
              onlyCountries={["uz"]}
              masks={{ uz: "(..) ...-..-.." }}
              placeholder={"+998 () ___--__"}
              areaCodes={{ uz: ["998"] }}
              autocomplete="off"
            />
            <span className="span2"></span>
          </InputFormFlex>
          <InputFormFlex>
            <span className="span1">
              <span>
                <img src={SoccerBall} alt="" />
              </span>
            </span>
            <select
              onChange={(e) => changeUserInfo(e)}
              // onFocus={() => onFocus("phone_error")}
              name="football_club"
              value={football_club}
              // disabled={erp_disable}
            >
              <option value="" selected>
                Футбольный клуб
              </option>
              {clubs
                ? clubs.map((item, index) => (
                    <option
                      key={index}
                      selected={item.id === football_club ? "selected" : ""}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
            <span className="span2"></span>
          </InputFormFlex>
          <InputFormFlex>
            <span className="span1">
              <span>
                <img src={SoccerShoe} alt="" />
              </span>
            </span>
            <select
              onChange={(e) => changeUserInfo(e)}
              // onFocus={() => onFocus("phone_error")}
              name="position"
              value={position}
            >
              <option value="" selected>
                Позиция
              </option>
              {playerPosition
                ? playerPosition.map((item, index) => (
                    <option
                      key={index}
                      selected={item.id === position ? "selected" : ""}
                      value={item.id}
                    >
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
            <span className="span2"></span>
          </InputFormFlex>
          <InputFormFlex>
            <span className="span1">
              <span>
                <img src={Location} alt="" />
              </span>
            </span>
            <input
              onChange={(e) => changeUserInfo(e)}
              // onFocus={() => onFocus("fullName_error")}
              value={city}
              type="text"
              name="city"
              placeholder="Город"
            />
            <span className="span2"></span>
          </InputFormFlex>
          <InputFormFlex>
            <span className="span1">
              <span>
                <img src={Location} alt="" />
              </span>
            </span>
            <input
              onChange={(e) => changeUserInfo(e)}
              // onFocus={() => onFocus("fullName_error")}
              value={region}
              type="text"
              name="region"
              placeholder="Область"
            />
            <span className="span2"></span>
          </InputFormFlex>
        </form>
      </AppMAIN>
      <AppFooter>
        <button type="submit" className="appBtnGreen">
          Сбросить пароль
        </button>
      </AppFooter>
    </>
  );
};

export default ProfileEdit;
