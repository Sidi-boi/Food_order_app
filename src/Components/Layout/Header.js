import React, { Fragment } from "react";

import mealImage from "../../Assets/meals.jpg";
import HeaderCart from "./HeaderCartButton";

import classess from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classess.header}>
        <h1> Meals Order</h1>
        <HeaderCart onClick={props.onShowCart}/>
      </header>
      <div className={classess["main-image"]}>
        {" "}
        {/**we can't use dot notation if a class name has '-'*/}
        <img src={mealImage} alt="An delicious food's table" />
      </div>
    </Fragment>
  );
};


export default Header;