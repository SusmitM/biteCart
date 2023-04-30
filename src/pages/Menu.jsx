import { FoodCard } from "../components/FoodCard";
import { useMenuContext } from "../contexts/MenuContext";

export const Menu = () => {
  const {
    radioFilteredData,
    handelCheckboxFilter,
    handelSearchFilter,
    handelRadioFilter,
  } = useMenuContext();

  return (
    <>
      <div className="filterSection">
        <h2 className="filterTitle">Filter By:</h2>
        <span>
          <input
            placeholder="Search Here"
            type="text"
            onChange={(e) => handelSearchFilter(e.target.value)}
          />
        </span>

        <label>
          <input
            type="checkbox"
            value="spicy"
            onChange={() => handelCheckboxFilter("is_spicy")}
          />
          Spicy
        </label>
        
        
        <label>
          {" "}
          <input
            type="checkbox"
            value="veg"
            onChange={() => handelCheckboxFilter("is_vegetarian")}
          />
          Veg
        </label>
        <label>
        <input
          type="radio"
          value="LtH"
          name="radioFilter"
          onChange={() => handelRadioFilter("LtH")}
        />{" "}
        Low to High
        </label>
        <label>
        <input
          type="radio"
          value="HtL"
          name="radioFilter"
          onChange={() => handelRadioFilter("HtL")}
        />{" "}
        High to Low
        </label>
      </div>

      <div className="menu">
        {radioFilteredData.map((item) => {
          return (
            <>
              <FoodCard item={item} />
            </>
          );
        })}
      </div>
    </>
  );
};
