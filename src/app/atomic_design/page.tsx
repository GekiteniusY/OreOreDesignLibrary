import React from "react";
import { atomsList } from "../../../const/atomic-design";

const AtomicDesign = () => {
  return (
    <div className=''>
      <h1 className='text-5xl'>Atomic Design</h1>
      <br />
      <div>
        pinned contents
        <div></div>
      </div>
      <br />
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
