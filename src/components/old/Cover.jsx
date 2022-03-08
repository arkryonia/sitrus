import React from "react";
import cover from "../../assets/img/students.svg";

// FIXME - Close Menu After click

export const Cover = () => {
  return (
    <section
      id="home"
      className="pt-60 pb-16 px-8 md:px-12 min-h-screen bg-i-teal"
    >
      <div className="max-w-7xl mx-auto md:flex md:items-center md:justify-between">
        <div className="md:flex-1 md:mr-6">
          <h1 className="font-extrabold text-4xl md:text-5xl text-white leading-tight">
            Institut International de Finance de Management et d'Expertise
            Comptable
          </h1>
          <h2 className="mt-5 md:mt-10 font-bold text-white text-lg">
            L'école des Entrepreneurs de demain.
          </h2>
          <p className="my-10 text-lg text-white">
            Autorisé sous le numéro{" "}
            <span className="oldstyle-nums">
              010/MERS/CAB/DC/SGM/DPP/DGES/DEPES/SA
            </span>{" "}
            notre établissement forme aux metiers des finances, du management
            et du numérique, les entrepreneurs et entrepreneuses de l'Afrique et
            du monde depuis <span className="oldstyle-nums">2015</span>.
          </p>
        </div>
        <div className="md:flex-1">
          <img src={cover} alt="Student on classroom" />
        </div>
      </div>
    </section>
  );
};

{/* <p className="sm:hidden">
  <a
    href="#formations"
    className="py-3 px-5 bg-i-violet text-white rounded shadow-md hover:shadow-none"
  >
    En savoir plus sur nos formations...
  </a>
</p> */}