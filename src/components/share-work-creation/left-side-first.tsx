import { Typography, Input } from "@material-tailwind/react";
import React from "react";

function LeftSideFirst() {
  return (
    <div className="mb-1 flex flex-col gap-4">
      <Typography variant="small" color="blue-gray" className="-mb-3 font-bold">
        Music Name
      </Typography>
      <Input
        crossOrigin={""}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <Typography variant="small" color="blue-gray" className="-mb-3 font-bold">
        Singer Name (Optional)
      </Typography>
      <Input
        crossOrigin={""}
        size="lg"
        placeholder=""
        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div className="flex justify-center items-center gap-2">
            <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
              Upload Music Image
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-[10rem] h-[10rem] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Less than 1M</span>
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 items-center">
            <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
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
                <input
                  id="dropzone-file-music"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-2 px-16 items-center">
            <p className="text-sm">{`The Music uploaded here is only for trial listening and not for download; if you don't have copyright, only upload music clips`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSideFirst;
