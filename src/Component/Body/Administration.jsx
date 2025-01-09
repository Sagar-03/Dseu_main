import React from "react";

const Administration = () => {
  return (
    <div className="p-4 md:p-8 lg:p-16 bg-[#ffffff]">
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold p-3">ADMINISTRATIVE</h1>
      <div className="bg-[#003E70] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Board of Governors
        </div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Finance Committee
        </div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">Deans</div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">Heads</div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Presidents, Pic’s & Chairperson
        </div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">Wardens</div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Assistant Wardens
        </div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">JR/DR/AR</div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Administration Units
        </div>
        <div className="bg-[#FFB733] w-full text-center py-2 px-4">
          Building and Works Committee
        </div>
      </div>
      <div className="bg-[#D9D9D9] p-5 mt-3 rounded-2xl space-y-7">
        <div className="bg-[#005CB9] flex flex-col sm:flex-row items-center py-6 px-4">
          <img src={"./assets/Chancellor.png"} className="w-32 h-32 sm:w-40 sm:h-40" />
          <div className="p-4 text-xl text-center sm:text-left">
            <div className="font-bold">Shri Vinai Kumar Saxena</div>
            <div>Chancellor & Lt. Governor, DSEU</div>
            <div>Email</div>
          </div>
        </div>
        <div className="bg-[#005CB9] flex flex-col sm:flex-row items-center py-6 px-4">
          <img src={"./assets/VC.svg"} className="w-32 h-32 sm:w-40 sm:h-40" />
          <div className="p-4 text-xl text-center sm:text-left">
            <div className="font-bold">Prof. Ashok Kumar Nagawat</div>
            <div>Vice-Chancellor, DSEU</div>
            <div>Email</div>
          </div>
        </div>
        <div className="bg-[#005CB9] flex flex-col sm:flex-row items-center py-6 px-4">
          <img src={"./assets/Registrar.svg"} className="w-32 h-32 sm:w-40 sm:h-40" />
          <div className="p-4 text-xl text-center sm:text-left">
            <div className="font-bold">Dr. Gagan Dhawan</div>
            <div>Registrar, DSEU</div>
            <div>Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administration;