import { Input, Textarea } from "@material-tailwind/react";
import React from "react";

function ContentRightSide() {
  return (
    <div className="flex flex-col py-4 px-6 gap-2 w-[32rem] overflow-y-auto border-2 border-black rounded-xl">
      <div className="flex flex-row gap-2">
        <p className="text-xs">Music Style :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs">Musical Instrument :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs">Movie/Game Type :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs">Software Tools :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs">Label :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <p className="text-xs">Describe</p>
        <Textarea className="text-xs !h-32" readOnly />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs">Comment</p>
        <Input crossOrigin={""} readOnly />
      </div>
    </div>
  );
}

export default ContentRightSide;
