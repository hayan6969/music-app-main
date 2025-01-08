import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { musicPlayerDialog } from "@/redux/features/offer/offerSlice";
import MusicPlayerV2 from "@/app/music-player/music-player-v2";

export default function MusicPlayerDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const isMusicPlayerDialog = useSelector(
    (state: RootState) => state.offer.musicPlayerDialog
  );

  return (
    <>
      <Dialog
        open={isMusicPlayerDialog}
        handler={() => dispatch(musicPlayerDialog())}
        size="lg"
      >
        {/* <DialogHeader className="justify-between">
          <div></div>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => dispatch(musicPlayerDialog())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </DialogHeader> */}
        <MusicPlayerV2 />
        {/* <DialogBody className="grid place-items-center h-fit w-full">
        </DialogBody> */}
      </Dialog>
    </>
  );
}
