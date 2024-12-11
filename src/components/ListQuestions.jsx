import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";

function ListQuestions({ itemx }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      onClick={handleOpen}
      className="md:w-[800px] border-b-2 border-e-slate-400 cursor-pointer "
    >
      <div className="flex justify-between items-center ">
        <p className="font-bold text-neutral-500 my-3 ">{itemx.quest}</p>
        {open ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      <p className={`${open ? "block" : "hidden"} text-slate-400 my-3`}>
        {itemx.answer}
      </p>
    </div>
  );
}

export default ListQuestions;
