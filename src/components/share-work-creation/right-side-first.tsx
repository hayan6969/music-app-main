import { Typography, Input } from "@material-tailwind/react";
import React from "react";

function RightSideFirst() {
  return (
    <div className="mb-1 flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <Typography
          variant="small"
          color="blue-gray"
          className="-mb-3 font-semibold"
        >
          My Role (Multiple Choice)
        </Typography>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <div className="flex items-center me-4">
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="inline-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Composer
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-2-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="inline-2-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Lyricist
              </label>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center me-4">
              <input
                id="inline-3-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="inline-3-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Arranger
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                id="inline-4-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label
                htmlFor="inline-4-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 "
              >
                Producer
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="-mb-3 font-semibold"
          >
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
        </div>
        <div className="flex flex-col gap-4">
          <Typography
            variant="small"
            color="blue-gray"
            className="-mb-3 font-semibold"
          >
            Publisher (Optional)
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
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="default"
            className="block text-sm font-semibold text-gray-900 "
          >
            Song Language (Optional)
          </label>
          <select
            id="default"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option defaultValue={"Select Language"}>Song Language</option>
            <option value="EN">English</option>
            <option value="JP">Japanese</option>
            <option value="GR">German</option>
            <option value="FR">French</option>
            <option value="IT">Italian</option>
            <option value="SP">Spanish</option>
            <option value="KR">Korean</option>
            <option value="CH">Chinese</option>
            <option value="AR">Arabic</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default RightSideFirst;
