import React from "react";
import Button from "./Button";
import homeScreenVideo from "../assets/home-page-video.mp4";
function Home() {
  return (
    <section className="w-full relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src={homeScreenVideo} type="video/mp4" />
      </video>
      <div className="w-full relative py-6 lg:py-16 2xl:py-26 max-w-screen-xl mx-auto px-6 md:px-16 pt-28 lg:pt-36">
        <div className="flex flex-col justify-between lg:gap-y-12 gap-y-6 pb-10">
          <div className="lg:mb-0 md:mb-4">
            <h1 className="2xl:text-7xl text-5xl font-staread">
              <span>The Leading</span>
              <br /> <span>Enterprise AI Platform</span>
            </h1>
          </div>
          <div className="lg:mb-10 mb-6">
            <p className="2xl:text-[38px] text-2xl font-starcil font-extrabold">
              Built on the language of business
            </p>
          </div>
          <div className="lg:mb-0 mb-4">
            <p className="2xl:text-2xl text-[18px] font-starcil font-extrabold">
              <span> Optimized for enterprise generative AI,</span> <br />
              <span>search and discovery, and advanced retrieval.</span>
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            <Button
              bgColor="bg-[#212121]"
              title="Contact Sales"
              textSize="text-[14px]"
            />
            <div className="relative rounded-lg cursor-pointer">
              <div className="absolute text-black text-sm top-1 -left-5 ml-8 mt-1 rounded-lg sm:w-auto w-full">
                TRY THE PLAYGROUND
              </div>
              <input
                className="sm:w-auto w-full text-white px-16 py-2 text-left border-black border-[1px] rounded-lg cursor-pointer"
                type="text"
                aria-label="search"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
