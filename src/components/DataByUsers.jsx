import React from "react";
import InfoByUsers from "./InfoByUsers";

import { dataUser } from "../data";

const Databyusers = () => {
  return (
    <div className="lg:container  px-6 md:px-0  mx-auto flex flex-col md:flex-row md:mt-10">
      <div className="flex-1 ">
        <p className="text-[#7E3AF2] font-bold mb-4">Trusted Worldwide</p>
        <p className="font-bold text-2xl max-w-[500px] mb-4">
          Trusted by over 600 million users and 10,000 teams
        </p>
        <p className="text-slate-400 max-w-[500px] mb-2">
          Our rigorous security and compliance standards are at the heart of all
          we do. We work tirelessly to protect you and your customers.
        </p>
        <p className="text-[#7E3AF2] font-bold my-1">Explore Legality Guide</p>
        <p className="text-[#7E3AF2] font-bold">Visit the Trust Center</p>
      </div>
      <div className="flex-1 grid grid-cols-2 mt-2">
        {dataUser.map((data) => (
          <InfoByUsers
            key={data.id}
            ico={data.icon}
            title={data.titulo}
            parrafo={data.parr}
          />
        ))}
      </div>
    </div>
  );
};

export default Databyusers;
