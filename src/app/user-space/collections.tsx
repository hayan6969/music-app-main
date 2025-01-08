import { CATEGORIES } from "@/dummy/example";
import React from "react";
import BoxWithInfo from "../../components/music-box/box-with-info";

function Collections() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {CATEGORIES.map((props, key) => (
          <BoxWithInfo key={key} {...props} withSale={false} />
        ))}
      </div>
    </>
  );
}

export default Collections;
