import { ChartPieIcon } from "@heroicons/react/24/solid";
import { Button, Textarea } from "@material-tailwind/react";
import React from "react";
import Comment from "./comment";

function ContentRightSideV2() {
  return (
    <div className="flex flex-col py-4 px-6 gap-4 w-[38rem] overflow-y-auto border-2 border-black rounded-xl">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-notoSemibold">Describe</p>
        <p className="max-h-[12rem] text-xs text-justify tracking-wide">{`
I Want It That Way" is a classic pop ballad by the Backstreet Boys, released in 1999. The song explores themes of love, longing, and the complexities of relationships. Its catchy melody and memorable chorus made it a defining hit of the late '90s.`}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-notoSemibold">Comment</p>
        <div className="flex flex-row gap-2 -mb-2">
          <ChartPieIcon color="blue" className="h-8 w-8" />
          <Textarea
            className="text-xs !h-[1rem] !text-black"
            label="what your though about this project?"
          />
        </div>
        <div className="flex justify-end">
          <Button
            variant="outlined"
            size="sm"
            className="normal-case text-center text-white text-[0.6rem] bg-blue-800 py-1 px-10 w-[10rem]"
          >
            Enter Comment
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 ml-10 overflow-y-auto">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
}

export default ContentRightSideV2;
