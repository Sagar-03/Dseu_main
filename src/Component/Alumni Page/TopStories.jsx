import React from "react";

const TopStories = () => {
  return (
    <section className="text-center py-12 px-5 bg-[#e7e7e7]">
      <h2 className="text-4xl font-bold text-[#003366] mb-5 underline">
        Our Top Stories
      </h2>
      <div className="flex flex-wrap justify-center gap-10 mb-8">
        <div className="w-full sm:w-[300px] h-[350px] bg-white overflow-hidden shadow-md">
          <div className="h-[70%] bg-[#c4c4c4]"></div>
          <div className="h-[30%] bg-white"></div>
        </div>
        <div className="w-full sm:w-[300px] h-[350px] bg-white overflow-hidden shadow-md">
          <div className="h-[70%] bg-[#c4c4c4]"></div>
          <div className="h-[30%] bg-white"></div>
        </div>
        <div className="w-full sm:w-[300px] h-[350px] bg-[#003e70] text-white flex justify-center items-center">
          <div className="flex flex-col justify-end text-center h-full px-5 py-3">
            <h3 className="text-2xl font-bold text-bottom">
              Alumni Magazine <br /> January 2025{" "}
              <a href="/" className="inline-block ml-2">
                <i className="fa-solid fa-up-right-from-square text-white"></i>
              </a>
            </h3>
          </div>
        </div>
      </div>
      <button className="py-2 px-5 text-lg font-bold text-white bg-[#ff9900] border-none rounded-lg cursor-pointer shadow-md">
        Read More
      </button>
    </section>
  );
};

export default TopStories;
