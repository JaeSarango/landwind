import React from "react";

export default function InfoByUsers({ ico, title, parrafo }) {
  return (
    <div>
      <img src={ico} alt="" />
      <p className="font-bold">{title}</p>
      <p className="text-slate-400 max-w-[200px]">{parrafo} </p>
    </div>
  );
}
