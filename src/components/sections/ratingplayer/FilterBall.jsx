import { InputFormFlex } from "../../../styles/Global.styled";

const FilterBall = (props) => {
  const { getWorldPlayers, typingTimeOut, setTypingTimeOut, filter } = props;

  const handleFilterBall = (e) => {
    let page = 1;
    let next_url = `/api/v1/user-filter-list-mir/?page=${page}&per_page=10`;
    setTypingTimeOut(
      setTimeout(() => {
        getWorldPlayers(page, next_url, { ...filter, ball: e.target.value });
      }, 1000)
    );

    if (typingTimeOut) {
      clearTimeout(typingTimeOut);
    }
  };
  return (
    <>
      <InputFormFlex>
        <input
          type="text"
          className="spanInput2"
          placeholder="Рейтинг победы"
          onChange={handleFilterBall}
          defaultValue={filter.ball}
        />
      </InputFormFlex>
    </>
  );
};

export default FilterBall;
