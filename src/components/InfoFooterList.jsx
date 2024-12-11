import React from "react";

function InfoFooterList({ arrayList }) {
  return (
    <div>
      {arrayList.map((text, i) => (
        <p className="mb-2" key={i}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default InfoFooterList;
