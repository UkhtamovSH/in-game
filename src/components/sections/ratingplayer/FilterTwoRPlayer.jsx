import { AppFooter, AppMAIN } from "../../../styles/ContainerFluid.styled";

const FilterTwoRPlayer = () => {
  return (
    <>
      <form>
        <AppMAIN>filter2</AppMAIN>
        <AppFooter>
          <button type="submit" className="appBtnGreen">
            Показать результаты
          </button>
        </AppFooter>
      </form>
    </>
  );
};

export default FilterTwoRPlayer;
