import React from "react";
import { useSelector } from "react-redux";
import SecondBox from "./SecondBox";

const Box = () => {
  let count = useSelector((state) => state.count);
  return (
    <div className="mx-auto w-fit space-y-4 rounded-3xl border border-fuchsia-400 bg-amber-200 p-8 text-xl">
      This is an awesome Box Component! <br />
      <p className="text-2xl font-bold">COUNT: {count}</p>
      <SecondBox></SecondBox>
    </div>
  );
};

export default Box;
