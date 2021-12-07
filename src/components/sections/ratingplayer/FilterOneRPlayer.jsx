import { AppFooter, AppMAIN } from "../../../styles/ContainerFluid.styled";
import { InputFormFlex } from "../../../styles/Global.styled";
import Select from "react-select";

const FilterOneRPlayer = (props) => {
  const {
    setFilterBall,
    getWorldPlayers,
    filterBall,
    toggleModal,
    typingTimeOut,
    setTypingTimeOut,
  } = props;

  // /api/v1/user-filter-list-mir?ball=2380

  const handleFilterBall = (e) => {
    e.preventDefault();
    setFilterBall(e.target.value);
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getWorldPlayers(page, next_url, e.target.value);
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };

  return (
    <>
      <form>
        <AppMAIN>
          <InputFormFlex>
            <input
              type="text"
              className="spanInput2"
              placeholder="Рейтинг победы"
              onChange={handleFilterBall}
              value={filterBall}
            />
          </InputFormFlex>
        </AppMAIN>
        <AppFooter>
          <button onClick={toggleModal} className="appBtnGreen">
            Показать результаты
          </button>
        </AppFooter>
      </form>
    </>
  );
};

export default FilterOneRPlayer;
