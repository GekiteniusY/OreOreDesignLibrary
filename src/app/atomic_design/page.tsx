import React from "react";
import { atomsList } from "../../../const/atomic-design";

const AtomicDesign = () => {
  return (
    <div>
      Atomic Design
      <div>
        pinned contents
        <div></div>
      </div>
      <hr></hr>
      <div>
        Atoms
        <div>
          <ul>
            {atomsList.map((atoms, index) => {
              return <li key={index}>{atoms}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AtomicDesign;
