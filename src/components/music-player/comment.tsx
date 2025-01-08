import { Avatar } from "@material-tailwind/react";
import React from "react";

function Comment() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Avatar
          src="https://docs.material-tailwind.com/img/face-2.jpg/"
          alt="avatar"
          size="sm"
        />
        <div className="flex flex-col gap-1">
          <div className="flex flex-row gap-1">
            <p className="text-xs font-bold">Mark</p>
            <p className="text-xs text-gray-500">18 Hours Ago</p>
            <p className="text-xs text-gray-500 hover:underline cursor-pointer">
              Reply
            </p>
          </div>
          <div className="flex flex-row gap-1">
            <p className="text-[0.7rem] font-semibold">Amazing Work!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Comment;
