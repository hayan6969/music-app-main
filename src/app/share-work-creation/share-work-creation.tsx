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
import LeftSideFirst from "@/components/share-work-creation/left-side-first";
import RightSideFirst from "@/components/share-work-creation/right-side-first";
import LeftSideSecond from "@/components/share-work-creation/left-side-second";
import RightSideSecond from "@/components/share-work-creation/right-side-second";
import DividePartFirst from "@/components/share-work-creation/divide-part-first";
import BottomPart from "@/components/share-work-creation/bottom-part";
import DividePartSecond from "@/components/share-work-creation/divide-part-second";
import MusicBackgroundDialog from "@/components/share-work-creation/music-background-dialog";

export function ShareWorkCreation() {
  return (
    <section className="flex flex-row justify-center items-center my-8">
      <MusicBackgroundDialog />
      <form className="flex flex-col gap-2">
        <div className="flex flex-row gap-8">
          <div className="w-96">
            <LeftSideFirst />
            {/* <DividePartFirst /> */}
            <LeftSideSecond />
          </div>
          <div className="w-96">
            <RightSideFirst />
            <RightSideSecond />
          </div>
        </div>
        {/* <div className="flex flex-row w-full justify-center items-center">
          <DividePartFirst />
        </div> */}
        {/* <div className="mt-6 flex flex-row gap-8">
          <div className="w-96">
            <LeftSideSecond />
          </div>
          <div className="w-96">
            <RightSideSecond />
          </div>
        </div> */}
        {/* <div className="flex flex-row px-[4.6rem] w-full mb-4 justify-between items-center">
          <DividePartSecond />
        </div> */}
        <div className="flex flex-col gap-8">
          <div className="my-2 w-full">
            <BottomPart />
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4 mb-10 mt-2">
          <div>
            <Button
              className="bg-blue-gray-100 text-black w-[8rem]"
              color="blue-gray"
              variant="outlined"
              fullWidth
            >
              Cancel
            </Button>
          </div>
          <div className="flex flex-row gap-6">
            <Button
              className="bg-blue-gray-100 text-black w-[14rem]"
              color="blue-gray"
              variant="outlined"
              fullWidth
            >
              Save as Draft
            </Button>
            <Button className="w-[14rem]" color="blue" fullWidth>
              Publish
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ShareWorkCreation;
