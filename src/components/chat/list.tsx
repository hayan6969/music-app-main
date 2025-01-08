import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { chatId } from "@/redux/features/chat/chatSlice";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

interface detailChatProps {
  id: number;
  avatar: string;
  userName: string;
  latestMessages: string;
  unreadChat: number;
}

interface listChatProps {
  listChat: detailChatProps[];
}

export default function ListChat({ listChat }: listChatProps) {
  const dispatch = useDispatch<AppDispatch>();
  const chatIdSelected = useSelector((state: RootState) => state.chat.chatId);
  return (
    <List>
      {listChat
        ? listChat.map((item) => (
            <ListItem
              key={item.id}
              className={`hover:bg-blue-gray-200/30 gap-3 ${
                chatIdSelected == item.id ? "focus:bg-blue-200 bg-blue-200" : ""
              } `}
              onClick={() => {
                dispatch(chatId(item.id));
              }}
            >
              <input
                id="inline-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 cursor-pointer "
              />
              <ListItemPrefix className="mr-0">
                <Avatar variant="circular" alt="candice" src={item.avatar} />
              </ListItemPrefix>
              <div className="max-w-[14rem] w-[14rem]">
                <Typography variant="h6" color="blue-gray">
                  {item.userName}
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal"
                >
                  {item.latestMessages}
                </Typography>
              </div>
              {item.unreadChat && chatIdSelected != item.id ? (
                <div className="rounded-full bg-blue-600 px-2 py-1 text-white font-medium text-xs">
                  {item.unreadChat}
                </div>
              ) : (
                ""
              )}
            </ListItem>
          ))
        : ""}
    </List>
  );
}
