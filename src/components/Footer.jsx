import React from "react";

function Footer() {
  return (
    <footer className="bg-[#232323] 2xl:px-40 lg:px-22 px-6 bg-cover bg-center">
      <div className="w-full relative py-12 lg:py-16 max-w-full-screen mx-auto uppercase">
        <div className="flex flex-col gap-2">
          <div className="mb-4 text-[#BDBDBD] text-[13px] font-serif">
            SIGN UP FOR OUR NEWSLETTERS
          </div>
          <div>
            <input
              className="px-2 pr-10 py-2 bg-[#424242] text-[#BDBDBD] border-[1px] border-white rounded-lg text-[18px] outline-none"
              type="email"
              placeholder="Enter Email*"
            />
          </div>
          <div className="flex gap-x-5 items-center">
            <div>
              <input
                className="h-7 w-7 bg-white border border-transparent rounded-md checked:bg-orange-500 checked:border-orange-500 focus:outline-none focus:ring-0"
                type="checkbox"
              />
            </div>
            <div>
              <span className="text-[#BDBDBD] text-[14px]">
                I consent to receiving email communications from <br />
                <a href="" className="underline">
                  Cohere
                </a>
              </span>
            </div>
          </div>
          <div>
            <span className="text-[#BDBDBD] text-[13px]">
              By submitting this form, you agree to our{" "}
              <a href="" className="underline">
                terms of use
              </a>{" "}
              and{" "}
              <a href="" className="underline">
                privacy policy
              </a>
            </span>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8 my-10">
          <div>
            <div className="mb-6">
              <span className="text-[#BDBDBD] text-[14px]">Products</span>
            </div>
            <ul className="text-white flex flex-col gap-2 text-[15px]">
              <li>
                <a href="">Command</a>
              </li>
              <li>
                <a href="">Embed</a>
              </li>
              <li>
                <a href="">Rerank</a>
              </li>
              <li>
                <a href="">Fine-tuning</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
              <li>
                <a href="">Cohere in Slack</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[#BDBDBD] text-[14px]">Developers</span>
            </div>
            <ul className="text-white flex flex-col gap-2 text-[15px]">
              <li>
                <a href="">Playground</a>
              </li>
              <li>
                <a href="">LLM University</a>
              </li>
              <li>
                <a href="">Documentation</a>
              </li>
              <li>
                <a href="">Release Notes</a>
              </li>
              <li>
                <a href="">API Reference</a>
              </li>
              <li>
                <a href="">Toolkit</a>
              </li>
              <li>
                <a href="">App Integrations</a>
              </li>
              <li>
                <a href="">Responsible Use</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[#BDBDBD] text-[14px]">Company</span>
            </div>
            <ul className="text-white flex flex-col gap-2  text-[15px]">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Research</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">Newsroom</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[#BDBDBD] text-[14px]">Trust Center</span>
            </div>
            <ul className="text-white flex flex-col gap-2 text-[15px]">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">SaaS Agreement</a>
              </li>
              <li>
                <a href="">SLO Agreement</a>
              </li>
              <li>
                <a href="">Responsibility</a>
              </li>
              <li>
                <a href="">Security</a>
              </li>
              <li>
                <a href="">Enterprise Data Commitments</a>
              </li>
              <li>
                <a href="">C4AI CC-BY-NC License</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-6">
              <span className="text-[#BDBDBD] text-[14px]">Contact</span>
            </div>
            <ul className="text-white flex flex-col gap-2 text-[15px]">
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-20 py-6 border-[#bdbdbd2c] border-solid border-b-[1px]">
          <img
            src="https://cdn.sanity.io/images/rjtqmwfu/production/28e74135f57d785599b3f36e024230911600c965-1320x225.svg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center gap-y-6 my-6 flex-wrap md:flex-nowrap">
          <div>
            <ul className="text-white flex gap-x-6 text-[14px]">
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">Discord</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-[#BDBDBD] flex gap-x-6 text-[13px]">
              <li>
                <a href="">Privacy</a>
              </li>
              <li>
                <a href="">Terms of Use</a>
              </li>
              <li>
                <a href="">©Cohere | Colon 2024</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
