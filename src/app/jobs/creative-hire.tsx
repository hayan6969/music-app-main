"use client";

import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Textarea,
} from "@material-tailwind/react";
import DatePicker from "@/components/date-picker";

export function CreativeHire() {
  return (
    <section className="flex flex-row justify-center items-center !w-12/12 md:w-[50rem]">
      <form className="flex flex-col gap-2 px-8">
        <div className="flex flex-row gap-8">
          <div className="w-96">
            <Typography
              variant="h4"
              color="blue-gray"
              className="pt-8 font-bold"
            >
              New Freelance Music Project
            </Typography>
            <p className="text-xs text-gray-700 font-medium">
              Create a brief to share your project requirements
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="my-2 w-full">
            {/* BOTTOM */}
            <div className="mb-1 flex flex-col gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Project Title
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
              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-1 font-semibold"
                >
                  Work Content (Multiple Choice)
                </Typography>
                <div className="flex mt-0">
                  <div className="flex items-center me-10">
                    <input
                      id="inline-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer "
                    />
                    <label
                      htmlFor="inline-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      Composition
                    </label>
                  </div>
                  <div className="flex items-center me-10">
                    <input
                      id="inline-2-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer "
                    />
                    <label
                      htmlFor="inline-2-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      Arrangement
                    </label>
                  </div>
                  <div className="flex items-center me-10">
                    <input
                      id="inline-3-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer "
                    />
                    <label
                      htmlFor="inline-3-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      Lyrics writing
                    </label>
                  </div>
                  <div className="flex items-center me-10">
                    <input
                      id="inline-3-checkbox"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer "
                    />
                    <label
                      htmlFor="inline-3-checkbox"
                      className="ms-2 text-sm font-medium text-gray-900 "
                    >
                      Production
                    </label>
                  </div>
                </div>
              </div>

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-2 font-semibold"
              >
                Does the music have lyrics?
              </Typography>
              <div className="flex mt-0">
                <div className="flex items-center me-4">
                  <input
                    id="radio-yes"
                    type="radio"
                    value=""
                    name="default-radio-lyrics"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label
                    htmlFor="radio-yes"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Yes
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="radio-no"
                    type="radio"
                    value=""
                    name="default-radio-lyrics"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label
                    htmlFor="radio-no"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    No
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="default"
                  className="block text-sm font-semibold text-gray-900 "
                >
                  Lyrics Language (Optional)
                </label>
                <select
                  id="default"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5 "
                >
                  <option defaultValue={"Select Language"}>
                    Select Language
                  </option>
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
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="default"
                  className="block text-sm font-semibold text-gray-900 "
                >
                  Music Usage
                </label>
                <select
                  id="default"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[15rem] p-2.5 "
                >
                  <option defaultValue={"Select Music Usage"}>
                    Select Music Usage
                  </option>

                  <option value="pop">Pop Music</option>
                  <option value="folk">Folk Music</option>
                  <option value="game">Game Music</option>
                  <option value="movie">Movie Music</option>
                  <option value="classical">Classical Music</option>
                  <option value="childrens">{"Children's Music"}</option>
                  <option value="scene">Scene Music</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-1 font-semibold"
                >
                  Your Budget
                </Typography>
                <div className="flex flex-row justify-start items-center gap-1">
                  US$
                  <div className="max-w-[5rem]">
                    <input
                      type="number"
                      id="cvv-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <p className="px-2 mb-4">___</p>
                  <div className="max-w-[5rem]">
                    <input
                      type="number"
                      id="cvv-input"
                      aria-describedby="helper-text-explanation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
                {/* <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-1 font-semibold"
                >
                  Your Timeframe
                </Typography>
                <div className="flex flex-row justify-start items-center gap-1">
                  <div className="max-w-[8rem]">
                    <input
                      type="text"
                      id="cvv-input"
                      className="bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                  <p className="px-2 mb-4">___</p>
                  <div className="max-w-[8rem]">
                    <input
                      type="text"
                      id="cvv-input"
                      className="bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                  </div>
                </div> */}
              </div>

              <div className="flex flex-col gap-3">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="-mb-1 font-semibold"
                >
                  Project Description
                </Typography>
                <Textarea className="w-[25rem] h-52" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start gap-4">
          <Button
            className="w-[14rem] rounded-full border-black border-[0.01rem] hover:bg-blue-300 hover:shadow-none shadow-none"
            color="blue"
            fullWidth
          >
            Create Music Project
          </Button>
          <Button
            className="hover:bg-blue-gray-100 hover:rounded-full text-black w-[8rem] bg-transparent shadow-none hover:shadow-none"
            fullWidth
          >
            Cancel
          </Button>
          <div className="flex flex-row gap-6"></div>
        </div>
      </form>
    </section>
  );
}

export default CreativeHire;
