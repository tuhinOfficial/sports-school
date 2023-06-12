import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ headers }) => {
  return (
    <div className="my-10  flex justify-center text-3xl font-semibold">
        <h1 className="border-b-2 border-light-blue-500">{headers}</h1>
    </div>
  );
};

export default Title;
