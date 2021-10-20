import React from "react";
import { useDispatch, useSelector } from "react-redux";
function Second() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.One);
  return (
    <div>
      <p> loal : {state}</p>
    </div>
  );
}

export default Second;
