import { InboxArrowDownIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import ChatDrawer from "./chat-drawer";
import { ChatTabs } from "./chat-tabs";
import JobApplications from "./job-applications";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { reportDialog } from "@/redux/features/offer/offerSlice";

function SidebarChat() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="flex flex-col">
      <ChatDrawer />
      <div className="flex flex-row items-center justify-between gap-1 p-4 border-b-2 border-black/10 w-full h-full max-w-[24rem] max-h-[4rem]">
        <div className="flex flex-row items-center gap-1">
          <Button
            variant="text"
            size="sm"
            className="normal-case text-center items-center flex flex-row gap-1 text-md px-3 py-1"
          >
            <InboxArrowDownIcon
              className="h-5 w-5 cursor-pointer"
              color="black"
            />
            Messages{""}
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3.5 w-3.5 transition-transform`}
            />
          </Button>
        </div>
        <div className="flex flex-row gap-1 items-center justify-center">
          {/* <Button
            variant="text"
            size="sm"
            className="normal-case text-center items-center flex flex-row gap-1 text-[0.7rem] px-3 py-1 border rounded-full border-black/50"
          >
            <i className="fas fa-plus text-white bg-black rounded-full p-[0.2rem]" />
            Compose
          </Button> */}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center py-4">
        <div className="w-72">
          <form>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className={`block w-full p-4 ps-10 h-3 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 bg-gray-50"`}
                autoComplete="off"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="flex flex-col px-4 border-b-2 border-black/10">
        <p className="text-xs font-semibold">JOB APPLICATIONS</p>
        <JobApplications />
      </div>
      <ChatTabs />
      <div className="flex flex-col gap-2 p-2 z-30">
        <Link href={"/contact-us"} target="_blank">
          <Button
            size="sm"
            color="white"
            className="flex items-center gap-3 normal-case w-fit"
          >
            Contact Us
          </Button>
        </Link>
        <Button
          size="sm"
          color="white"
          className="flex items-center gap-3 normal-case w-fit"
          onClick={() => dispatch(reportDialog())}
        >
          Report
        </Button>
      </div>
    </div>
  );
}

export default SidebarChat;
