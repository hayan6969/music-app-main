import { Avatar } from "@material-tailwind/react";
import React from "react";
import OfferRequest from "./../offer/offer-request";
import OfferConfirmation from "../offer/offer-confimartion";
import OrderOngoingFreelancer from "../order/order-ongoing-freelancer";
import OrderInfo from "../order/order-info";
import OrderUploadedWorks from "../order/order-uploaded-works";
import OrderDone from "../order/order-done";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { messages } from "@/dummy/listmessage-example";
import { users } from "@/dummy/users";
import ComponentSwitcher from "../switcher/componentSwitcher";

function ChatRoom() {
  const chatId = useSelector((state: RootState) => state.chat.chatId);
  return (
    <>
      {chatId != 0 && chatId == messages[chatId - 1].chatId ? (
        <div className="w-full py-2 overflow-hidden h-full overflow-y-auto">
          <div className="grid">
            {messages[chatId - 1].detail.map((item) => (
              <>
                {/* current user part */}
                {item.currentUser ? (
                  <div className="flex gap-2.5 px-2 justify-end">
                    <div className="grid max-w-[25rem]">
                      {item.isCard ? (
                        <ComponentSwitcher componentType={item.cardType} />
                      ) : (
                        <div className="px-3 py-2 bg-blue-600 rounded">
                          <h2 className="text-white text-left text-sm font-normal leading-snug">
                            {item.message}
                          </h2>
                        </div>
                      )}
                      <div className="justify-start items-center inline-flex px-2">
                        <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                          {item.datetime} PM
                        </h3>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex gap-2.5">
                    <Avatar
                      src={users[chatId - 1].avatar}
                      alt="avatar"
                      size="sm"
                    />
                    <div className="grid">
                      <div className="grid max-w-[25rem]">
                        {item.isCard ? (
                          <ComponentSwitcher componentType={item.cardType} />
                        ) : (
                          <div className="px-3.5 py-2 bg-blue-gray-200/20 rounded justify-start items-center gap-3 inline-flex">
                            <h5 className="text-black text-left text-sm font-normal leading-snug">
                              {item.message}
                            </h5>
                          </div>
                        )}
                        <div className="justify-end items-center inline-flex px-2">
                          <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                            {item.datetime} PM
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </>
            ))}
          </div>
          {/* {messages.detail.map((item) => (
            <>
              {item.currentUser ? (
                <div className="flex gap-2.5 px-2 justify-end">
                  <div className="grid max-w-[25rem]">
                    <div className="px-3 py-2 bg-blue-600 rounded">
                      <h2 className="text-white text-left text-sm font-normal leading-snug">
                        {"Yes, let's see, send your work here"}
                      </h2>
                    </div>
                    <div className="justify-start items-center inline-flex px-2">
                      <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        05:16 PM
                      </h3>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))} */}
          {/* user */}
          {/* <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <div className="px-3 py-2 bg-blue-600 rounded">
                <h2 className="text-white text-left text-sm font-normal leading-snug">
                  {"Yes, let's see, send your work here"}
                </h2>
              </div>
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  05:16 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OfferRequest />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  05:16 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OfferConfirmation />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  07:08 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OrderOngoingFreelancer />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  07:10 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OrderInfo />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  07:10 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OrderUploadedWorks />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  07:10 PM
                </h3>
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 px-2 justify-end">
            <div className="grid max-w-[25rem]">
              <OrderDone />
              <div className="justify-start items-center inline-flex px-2">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  07:10 PM
                </h3>
              </div>
            </div>
          </div> */}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ChatRoom;
