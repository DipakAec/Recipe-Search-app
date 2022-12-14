import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const MealItem = ({ data }) => {
 // console.log(data);
  let naviget = useNavigate();
  return (
    <>
      {!data
        ? "Not Found"
        : data.map((item) => {
            return (
              <div className="card" key={item.idMeal} onClick={()=>{naviget(`/${item.idMeal}`)}}>
                <img
                  src={item.strMealThumb}
                  alt=""
                />
                <h3>{item.strMeal}</h3>
              </div>
            );
          })}
    </>
  );
};

export default MealItem;
