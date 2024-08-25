import React from "react";
import { useSelector } from "react-redux";

const SecondBox = () => {
  let count = useSelector((state) => state.count);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  return (
    <div className="rounded-2xl bg-lime-300 p-4">
      SecondBox {count}
      <h2 className="text-xl font-bold">
        ID: {id} PW: {password}
      </h2>
    </div>
  );
};

export default SecondBox;
