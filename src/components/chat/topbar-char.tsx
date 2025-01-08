import {
  ArchiveBoxIcon,
  ExclamationTriangleIcon,
  NoSymbolIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Avatar, Button } from "@material-tailwind/react";
import React from "react";
import { RootState, AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { users } from "@/dummy/users";
import {
  reportDialog,
  reportUserDialog,
} from "@/redux/features/offer/offerSlice";

function TopbarChat() {
  const dispatch = useDispatch<AppDispatch>();
  const chatId = useSelector((state: RootState) => state.chat.chatId);
  return (
    <>
      {chatId != 0 ? (
        <div className="flex flex-row justify-between border-b-2 p-4 border-black/10 h-[4rem] max-h-[4rem]">
          <div className="flex flex-row items-center gap-2">
            <Avatar src={users[chatId - 1].avatar} alt="avatar" size="sm" />
            <p className="font-semibold text-sm">
              {users[chatId - 1].userName}
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <Button variant="text" size="sm" className="text-md p-2">
              <ArchiveBoxIcon
                className="h-5 w-5 cursor-pointer"
                color="black"
              />
            </Button>
            <Button variant="text" size="sm" className="text-md p-2">
              <ExclamationTriangleIcon
                className="h-5 w-5 cursor-pointer"
                color="black"
                onClick={() => dispatch(reportDialog())}
              />
            </Button>
            <Button
              variant="text"
              size="sm"
              className="text-md p-2"
              onClick={() => dispatch(reportUserDialog())}
            >
              <NoSymbolIcon className="h-5 w-5 cursor-pointer" color="black" />
            </Button>
            <Button variant="text" size="sm" className="text-md p-2">
              <TrashIcon className="h-5 w-5 cursor-pointer" color="red" />
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default TopbarChat;
