import { GetAuthInstance } from "../../../helpers/httpClient";
import { ProfileHeaderFlex } from "../../../styles/Profile.styled";
import DefaultImg from "../../../assets/Img/default.png";
import { useState } from "react";
import { get } from "lodash";
import { useTranslation } from "react-i18next";

const ChangeProfileImg = (props) => {
  const { setUserProfile, userProfile, avatar } = props;

  const [imgLoading, setImgLoading] = useState(false);
  const [errors, setErrors] = useState({
    change_errorImg: false,
    del_errorImg: false,
  });

  const { change_errorImg, del_errorImg } = errors;

  const handleImgChange = (e) => {
    setImgLoading(true);
    var formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    GetAuthInstance()
      .post("/api/v1/edit-profil-image/", formData)
      .then((res) => {
        const status = get(res, "data.status");
        if (status === 1) {
          setUserProfile({ ...userProfile, avatar: res?.data?.data?.avatar });
          setErrors({
            ...errors,
            change_errorImg: false,
          });
        } else {
          setErrors({
            ...errors,
            change_errorImg: true,
          });
        }
      })
      .catch((err) => {})
      .finally(() => setImgLoading(false));
  };
  const handleImgDelete = () => {
    setImgLoading(true);

    var formData = new FormData();
    formData.append("avatar_delete", true);
    GetAuthInstance()
      .post("/api/v1/edit-profil-image/", formData)
      .then((res) => {
        const status = get(res, "data.status");
        if (status === 1) {
          setUserProfile({ ...userProfile, avatar: "" });
          setErrors({
            ...errors,
            del_errorImg: false,
          });
        } else
          setErrors({
            ...errors,
            del_errorImg: true,
          });
      })
      .catch((err) => {})
      .finally(() => setImgLoading(false));
  };

  const { t } = useTranslation();

  return (
    <>
      <ProfileHeaderFlex>
        <div className="profileHeaderFlexSub1">
          {imgLoading ? (
            <div className="AppLoader2" />
          ) : (
            <img
              src={avatar ? avatar : DefaultImg}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = DefaultImg;
              }}
              alt=""
            />
          )}
        </div>
        <div
          className="profileHeaderFlexSub2"
          style={{ transform: "translate(0,10px)" }}
        >
          <p>{t("changeProfileImgSection.yourImg")}</p>
          <div className="text12Flex">
            <span className="text1" style={{ width: "100px" }}>
              <label htmlFor="files" style={{ cursor: "pointer" }}>
                {t("changeProfileImgSection.changeImg")}
              </label>
              <input
                id="files"
                style={{ visibility: "hidden" }}
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImgChange}
              />
            </span>
            <span className="text2" onClick={handleImgDelete}>
              {t("changeProfileImgSection.deleteImg")}
            </span>
          </div>
        </div>
      </ProfileHeaderFlex>
      {change_errorImg ? (
        <span className="inputError">
          {t("changeProfileImgSection.errorUpload")}
        </span>
      ) : null}
      {del_errorImg ? (
        <span className="inputError">
          {t("changeProfileImgSection.errorDelete")}
        </span>
      ) : null}
    </>
  );
};

export default ChangeProfileImg;
