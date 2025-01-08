import React from "react";
import { useSearchParams } from "next/navigation";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

function ContentLeftSideV2() {
  const isMusicAssets = useSelector(
    (state: RootState) => state.offer.isMusicAssets
  );
  return (
    <div className="flex flex-col py-4 px-6 gap-4 w-[29rem] border-2 border-black rounded-xl">
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Music Name :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className={`flex flex-row gap-2 ${isMusicAssets ? "hidden" : ""}`}>
        <p className="text-xs font-notoSemibold">Singer Name :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className={`flex flex-row gap-2 ${isMusicAssets ? "hidden" : ""}`}>
        <p className="text-xs font-notoSemibold">Publisher :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Music Usage :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Music Style :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Mood :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Musical Instrument :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Software Tools :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div className="flex flex-row gap-2">
        <p className="text-xs font-notoSemibold">Label :</p>
        <p className="text-xs">Dummy</p>
      </div>
      <div
        className={`flex flex-row gap-2 mt-3 items-center ${
          isMusicAssets ? "hidden" : ""
        }`}
      >
        <p className="text-xs font-notoSemibold">Lyric :</p>
        <div className="flex flex-row gap-[0.4rem] items-center">
          {/* <HeartIcon className="h-6 w-6 cursor-pointer hover:scale-125" /> */}
          {/* <p className="text-[0.7rem] text-black font-semibold">No Lyric</p> */}
          <img
            className="cursor-pointer hover:scale-125"
            src={"/icons/new-like.png"}
            style={{ height: 18, width: 18 }}
          />
          <p className="text-[0.7rem] text-black font-semibold">26</p>
        </div>
      </div>
    </div>
  );
}

export default ContentLeftSideV2;
