import { FaceSmileIcon, PaperClipIcon } from "@heroicons/react/24/outline";
import React from "react";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { updateDialog } from "@/redux/features/offer/offerSlice";

function ChatInput() {
  const dispatch = useDispatch<AppDispatch>();
  const chatId = useSelector((state: RootState) => state.chat.chatId);
  return (
    <>
      {chatId != 0 ? (
        <div className="w-full gap-4 inline-flex justify-center mr-20">
          <div className="flex items-start gap-2">
            <PaperClipIcon
              className="h-8 w-8 cursor-pointer hover:bg-black/10 hover:rounded-lg p-1"
              color="black"
            />
            <FaceSmileIcon
              className="h-8 w-8 cursor-pointer hover:bg-black/10 hover:rounded-lg p-1"
              color="black"
            />
            <button
              className="items-center flex px-1 py-2 bg-black hover:bg-black/60 rounded-full shadow"
              onClick={() => dispatch(updateDialog())}
            >
              <h3 className="text-white text-xs font-semibold leading-4 px-2">
                Send Order
              </h3>
            </button>
          </div>
          <div className="flex items-start">
            <textarea
              cols={30}
              rows={10}
              className="w-[35rem] !h-[6rem] bg-white resize-none bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
              placeholder="Enter your text"
            ></textarea>
          </div>
          <div className="flex items-start justify-end gap-1">
            <button className="items-center flex px-3 py-2 bg-blue-400 hover:bg-blue-200 rounded-full shadow ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g id="Send 01">
                  <path
                    id="icon"
                    d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </svg>
              <h3 className="text-white text-xs font-semibold leading-4 px-2">
                Send
              </h3>
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ChatInput;
