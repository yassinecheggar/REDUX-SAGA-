import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add_number, sub_number } from "../Actions/actions";

function Fisrt() {
  const dispatch = useDispatch();
  return (
    <div>
      <p> counter one : {useSelector((state) => state.One)}</p>
      <input type="text" />
      <button onClick={() => dispatch(add_number())}>add</button>
      <button onClick={() => dispatch(sub_number())}>subtact</button>
      <Link to="/page2">Next Page</Link>
    </div>
  );
}

export default Fisrt;
