import React from "react";
import { VscCheck } from "react-icons/vsc";

function ListServices({ listServ }) {
  return (
    <ul>
      {listServ.map((item, i) => (
        <li className="flex items-center gap-x-2" key={i}>
          <VscCheck className="text-green-600" />
          <p className="mb-2">{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListServices;
