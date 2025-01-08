import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { musicBackgroundDialog } from "@/redux/features/offer/offerSlice";

export default function MusicBackgroundDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const isMusicBackgroundDialog = useSelector(
    (state: RootState) => state.offer.musicBackgroundDialog
  );

  return (
    <>
      <Dialog
        open={isMusicBackgroundDialog}
        handler={() => dispatch(musicBackgroundDialog())}
      >
        <DialogBody divider className="grid place-items-center">
          <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-1.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-2.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-3.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-4.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-5.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-6.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-7.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-8.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-9.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-10.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <img
                src={"/image/music-background/music-bg-11.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
              <img
                src={"/image/music-background/music-bg-12.png"}
                style={{ height: 70, width: 270 }}
                className="cursor-pointer hover:shadow-xl hover:border-blue-200 hover:border-2 focus:border-blue-200 focus:border-2"
              />
            </div>
          </div>
          <div className="flex flex-row justify-end items-end gap-4 my-2 mr-[6rem] w-full">
            <Button
              variant="filled"
              className="bg-gray-200 text-black"
              onClick={() => dispatch(musicBackgroundDialog())}
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => dispatch(musicBackgroundDialog())}
            >
              Save
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
