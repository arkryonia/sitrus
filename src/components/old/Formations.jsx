import React from "react";

import formations from "../../assets/img/cursus.svg";

export const Formations = () => {
  return (
    <section id="formations" className="pt-40 min-h-screen bg-pattern">
      <div className="container mx-auto">
        <h1 className="text-center pb-10 font-bold uppercase text-5xl text-i-violet">
          Nos Formations
        </h1>
        <div className="flex justify-between gap-5">
          <div className="">
            <img
              src={formations}
              alt="formations illustration"
              className="bg-i-teal p-10 rounded"
            />
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            quaerat dignissimos ex temporibus architecto consequuntur, in
            dolorum quibusdam eius corrupti dolorem cum quasi amet vero enim
            alias esse eos pariatur?
          </div>
        </div>
      </div>
    </section>
  );
};
