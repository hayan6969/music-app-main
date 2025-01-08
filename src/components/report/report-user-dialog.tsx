import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Textarea,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { reportUserDialog } from "@/redux/features/offer/offerSlice";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { users } from "@/dummy/users";

export default function ReportUserDialog() {
  const dispatch = useDispatch<AppDispatch>();
  const isReportUserDialog = useSelector(
    (state: RootState) => state.offer.reportUserDialog
  );
  const chatId = useSelector((state: RootState) => state.chat.chatId);

  return (
    <>
      {chatId != 0 ? (
        <Dialog
          open={isReportUserDialog}
          handler={() => dispatch(reportUserDialog())}
          size="xs"
        >
          <DialogBody divider className="grid h-[15rem]">
            <div className="flex flex-col items-center justify-center gap-5">
              <div className="py-2 flex items-center justify-center">
                <Typography
                  color="black"
                  className="font-notoCondensed"
                  variant="h4"
                >
                  Block {users[chatId - 1].userName}
                </Typography>
              </div>
              <div className="flex flex-row items-center justify-center gap-10 mt-3">
                <Button
                  variant="gradient"
                  size="md"
                  color="blue"
                  className="text-xs normal-case rounded-full"
                  onClick={() => dispatch(reportUserDialog())}
                >
                  Block User
                </Button>
                <Button
                  variant="outlined"
                  size="md"
                  className="text-xs normal-case rounded-full"
                  onClick={() => dispatch(reportUserDialog())}
                >
                  No Thanks
                </Button>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      ) : (
        ""
      )}
    </>
  );
}
