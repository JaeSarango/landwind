import React from "react";
import ListServices from "./ListServices";
import { Button } from "@nextui-org/react";
import { planes } from "../data";

function Planes() {
  return (
    <div className=" flex flex-col items-center justify-center gap-x-16 lg:container  px-6 md:px-0  mx-auto md:flex-row ">
      {planes.map((item, i) => (
        <div
          className="border-2 border-gray-200 rounded-md  shadow-[#e5e7eb] shadow-md max-w-[300px] flex items-center flex-col gap-2 my-8  px-4"
          key={i}
        >
          <p className="font-bold  text-[20px] mt-4">{item.titulo}</p>
          <p className="text-slate-400  text-center">{item.description}</p>
          <p className="font-bold text-[25px]">{item.price}</p>
          <ListServices listServ={item.services} />

          <Button className=" rounded-md  bg-[#7e3af2] p-2 text-white mb-4 w-56">
            Get Started
          </Button>
        </div>
      ))}
    </div>
  );
}
export default Planes;
