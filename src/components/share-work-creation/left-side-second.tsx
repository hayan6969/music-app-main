import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { musicBackgroundDialog } from "@/redux/features/offer/offerSlice";

function LeftSideSecond() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="mb-1 flex flex-col gap-4 mt-6 items-center">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center gap-2">
          <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
            Upload Lyric
            <label
              htmlFor="dropzone-file-lyric"
              className="flex flex-col items-center justify-center w-[10rem] h-[3rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Less than 50k</span>
                </p>
              </div>
              <input id="dropzone-file-lyric" type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-[18rem] max-w-[9.8rem] flex flex-col justify-center items-center gap-2 font-semibold text-xs text-center">
            Please select music playback background
            <label
              // htmlFor="dropzone-file-music-bg"
              className="flex flex-col items-center justify-center w-[10rem] h-[3rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Select</span>
                </p>
              </div>
              <input
                className="hidden"
                onClick={() => dispatch(musicBackgroundDialog())}
              />
            </label>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-xs text-center">
            <p className="text-blue-600">Upload Music Playback Background</p>
            <label
              htmlFor="dropzone-file-music-bg"
              className="flex flex-col items-center justify-center w-[10rem] h-[3rem] border-2 border-blue-600 border-dashed rounded-lg cursor-pointer bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Less than 500k</span>
                </p>
              </div>
              <input
                id="dropzone-file-music-bg"
                type="file"
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideSecond;
