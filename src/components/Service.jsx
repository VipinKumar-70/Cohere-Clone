import React from "react";
import banner from "../assets/banner.png";
import model from "../assets/model.png";
import Button from "./Button";
import { RxFontSize } from "react-icons/rx";

function Service() {
  return (
    <section className="relative w-full bg-bottom overflow-hidden py-4">
      {/* Background Image */}
      <div className="absolute inset-0 h-full w-full">
        <img
          src={banner}
          alt="Background showcasing our services"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="2xl:px-40 lg:px-22 px-6">
        {/* First Section */}
        <div className="relative flex items-center justify-between flex-wrap md:flex-nowrap w-full py-12 font-starcil font-semibold">
          <div className="sm:w-full md:w-3/4 xl:w-[50%] lg:w-[70%]">
            <div className="flex gap-3 mb-3">
              <p>OUR MODELS</p>
              <img
                src="https://cdn.sanity.io/images/rjtqmwfu/production/4ef2d29439c7ab799af033f583a7f04543f91ae8-16x16.svg"
                alt=""
              />
            </div>
            <div>
              <p className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                Our models are designed to augment and elevate the global
                workforce, so businesses can thrive and stay competitive in the
                AI era.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={model} alt="" className="max-w-full h-auto" />
          </div>
        </div>

        {/* Second Section */}
        <div className="relative flex items-center justify-between flex-wrap md:flex-nowrap w-full py-12 font-starcil font-semibold bg-[#ffffff96] rounded-3xl flex-row-reverse gap-y-6 p-3">
          <div className="sm:w-full md:w-3/4 lg:w-[60%] xl:w-[50%] flex justify-start flex-wrap flex-col 2xl:px-20 lg:px-10 px-4">
            <div className="flex gap-3 items-center text-xs my-2">
              <p className="p-2 bg-purple-400 rounded-lg">NEW</p>
              <p>COMMAND</p>
              <img
                src="https://cdn.sanity.io/images/rjtqmwfu/production/a1909385aa103bc3e54a2d23908601d7efbab49f-16x16.svg"
                alt=""
                className="w-4 h-4"
              />
            </div>
            <div>
              <p className="lg:text-4xl md:text-3xl text-2xl font-medium mb-6">
                Cohere Command, powering innovation with enterprise GenAI
              </p>
            </div>
            <div className="mb-6 font-medium">
              <p>
                Command models are used by companies to build production-ready,
                scalable and efficient AI-powered applications.
              </p>
            </div>
            <div>
              <Button title="Learn more" />
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={model} alt="" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
