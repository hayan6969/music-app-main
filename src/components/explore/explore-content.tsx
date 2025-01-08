"use client";
import BoxWithInfo from "@/components/music-box/box-with-info";
import { JOBS_PROPS } from "@/dummy/example";

function ExploreContent() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
          {JOBS_PROPS.map((props, key) => (
            <BoxWithInfo
              key={key}
              {...props}
              withFindSimilar={true}
              withSale={false}  
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreContent;
