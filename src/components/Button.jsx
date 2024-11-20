import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Button({ title }) {
  return (
    <div className="relative flex grow">
      <div className="flex grow gap-x-2.5">
        <div className="h-full min-h-cell-md max-h-cell-md flex group/cell transition-all sm:grow-0 grow">
          <span className="bg-gray-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -mr-0.5 w-3 rounded-l-[6px] border-transparent"></span>
          <div className="bg-gray-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-start items-center transition-colors bg-clip-padding py-2 pr-28">
            <div className="w-full">
              <span className="px-0 justify-between flex w-full items-center transition-all">
                <span className="text-[17px] font-body uppercase">
                  <span>{title}</span>
                  <br />
                </span>
              </span>
            </div>
          </div>
          <span className="bg-gray-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -skew-x-[21deg] rounded-tr-[10px] rounded-br-[4px] border-transparent"></span>
        </div>
        <div className="h-full min-h-cell-md max-h-cell-md flex group/cell transition-all -ml-1 grow-0">
          <span className="bg-gray-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right w-6 -mr-4 -skew-x-[21deg] rounded-tl-[4px] rounded-bl-[10px] border-transparent"></span>
          <div className="bg-gray-900 text-white h-full min-h-cell-md max-h-cell-md truncate flex grow justify-center items-center transition-colors bg-clip-padding px-3">
            <div className="w-full">
              <span className="px-0 flex items-center transition-all">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <span className="bg-gray-900 h-full min-h-cell-md max-h-cell-md transition-all bg-clip-padding origin-top-right -ml-0.5 w-3 rounded-r-[6px] border-transparent"></span>
        </div>
      </div>
    </div>
  );
}

export default Button;
