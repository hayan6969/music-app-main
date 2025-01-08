"use client";

import React from "react";
import TopMusicPlayerV2 from "@/components/music-player/top-music-player-v2";
import ContentMusicPlayerV2 from "@/components/music-player/content-music-player-v2";
import MediaPlayerV2 from "@/components/music-player/media-player-v2";
import ReportDialog from "@/components/report/report-dialog";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { reportDialog } from "@/redux/features/offer/offerSlice";

function MusicPlayerV2() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <ReportDialog />
      <div className="flex flex-col h-[46rem] text-black">
        <div className="flex flex-row w-full h-full border-black/10 border-2">
          <div className="relative w-full h-fit space-y-2 items-center">
            <div className="flex flex-row">
              <div className="flex flex-col w-full">
                <TopMusicPlayerV2 />
                <ContentMusicPlayerV2 />
                <MediaPlayerV2 />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 p-2">
          <p
            className="text-xs normal-case hover:underline hover:text-blue-500 cursor-pointer"
            onClick={() => dispatch(reportDialog())}
          >
            Report
          </p>
        </div>
      </div>
    </>
  );
}

export default MusicPlayerV2;
