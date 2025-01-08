import {
  reactionLyricMediaPlayer,
  customSize,
  reactionCompositionMediaPlayer,
  reactionArrangementMediaPlayer,
  reactionAddShoppingSmall,
  reactionAddShopping,
  shoppingMusicSize,
} from "@/default/reaction";
import React from "react";
import ReactionIcons from "./reaction-icons";
import ReactionShopping from "./reaction-shopping";
import { HeartIcon } from "@heroicons/react/24/outline";

interface ReactionBoxProps {
  withSale?: boolean;
}

function ReactionBox({ withSale }: ReactionBoxProps) {
  return (
    <div className="flex flex-row">
      {withSale ? (
        <ReactionShopping
          data={reactionAddShopping}
          customSize={shoppingMusicSize}
        />
      ) : (
        // <img
        //   className="cursor-pointer hover:scale-125"
        //   src={"/icons/new-like.png"}
        //   style={{ height: 20, width: 20 }}
        // />
        ""
      )}
      <span className="mr-1"></span>
      <div className="flex flex-row gap-[0.4rem] items-center">
        {/* <HeartIcon className="h-6 w-6 cursor-pointer hover:scale-125" /> */}
        <img
          className="cursor-pointer hover:scale-125"
          src={"/icons/new-like.png"}
          style={{ height: 16, width: 16 }}
        />
        <p className="text-[0.7rem] font-semibold">26</p>
      </div>
      {/* <ReactionIcons data={reactionLyricMediaPlayer} customSize={customSize} />
      <ReactionIcons
        data={reactionCompositionMediaPlayer}
        customSize={customSize}
      />
      <ReactionIcons
        data={reactionArrangementMediaPlayer}
        customSize={customSize}
      /> */}
    </div>
  );
}

export default ReactionBox;
