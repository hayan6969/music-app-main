import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ListChat from "./list";
import { dataChat } from "@/dummy/listchat-example";

export function ChatTabs() {
  const [activeTab, setActiveTab] = React.useState("all");
  const data = [
    {
      label: `All (${dataChat.length})`,
      value: "all",
      desc: <ListChat listChat={dataChat} />,
    },
    {
      label: "Inquiries (0)",
      value: "inquiries",
      desc: "",
    },
  ];
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 w-[24rem] max-w-[24rem]"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value ? "text-gray-900 w-[24rem] max-w-[24rem]" : ""
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="w-[24rem] max-w-[24rem] p-0 h-[30rem] max-h-[30rem] overflow-hidden overflow-y-auto"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
