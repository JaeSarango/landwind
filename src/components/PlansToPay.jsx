import React from "react";
import Planes from "./Planes";

function PlansToPay() {
  return (
    <div className="lg:container  px-6 md:px-0  mx-auto my-12">
      <div className=" flex items-center flex-col">
        <p className="font-bold items-center text-[20px]"> Pay as you grow</p>
        <p className="text-gray-400 flex items-center max-w-[500px] mb-6">
          Here at flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <Planes />
    </div>
  );
}

export default PlansToPay;
