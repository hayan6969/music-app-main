import React from "react";
import ContentLeftSideV2 from "./content-left-side-v2";
import ContentRightSideV2 from "./content-right-side-v2";

function ContentMusicPlayerV2() {
  return (
    <div className="flex flex-row gap-6 justify-between p-2 my-2 mx-4 h-[30rem] min-w-screen max-w-screen">
      <ContentLeftSideV2 />
      <ContentRightSideV2 />
    </div>
  );
}

export default ContentMusicPlayerV2;
