import React from "react";
import ListQuestions from "./ListQuestions";
import { questions } from "../data";

function Faqs() {
  return (
    <div className="lg:container flex justify-center flex-col w-full  my-6 px-6 md:px-0   items-center mx-auto ">
      <h2 className="font-bold text-[25px] mb-8 ">
        {" "}
        Frequently asked questions
      </h2>
      <div>
        {questions.map((item, i) => (
          <ListQuestions key={i} itemx={item} />
        ))}
      </div>
    </div>
  );
}

export default Faqs;
