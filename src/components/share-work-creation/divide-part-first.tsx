import React from "react";

function DividePartFirst() {
  return (
    <>
      <div className="flex flex-col gap-2 w-fit border-2 border-black">
        <div className="w-[10rem] ml-[6.8rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
          Upload Music
          <label
            htmlFor="dropzone-file-music"
            className="flex flex-col items-center justify-center w-[10rem] h-[6rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Less than 20M</span>
              </p>
            </div>
            <input id="dropzone-file-music" type="file" className="hidden" />
          </label>
        </div>
        <div className="flex gap-2 max-w-[15rem]">
          <p className="text-sm">{`The Music uploaded here is only for trial listening and not for download; if you don't have copyright, only upload music clips`}</p>
        </div>
      </div>
    </>
  );
}

export default DividePartFirst;
