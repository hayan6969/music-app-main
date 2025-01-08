"use client";
import MusicPlayerDialog from "@/components/music-player/music-player-dialog";
import FilterExploreComponent from "@/components/filters/filter-explore";
import ExploreContent from "@/components/explore/explore-content";

export function ExplorePage() {
  return (
    <>
      <FilterExploreComponent />
      <section className="py-8 flex justify-center sm:justify-center md:px-4 lg:py-4">
        <MusicPlayerDialog />
        {/* <ExploreContent /> */}
      </section>
    </>
  );
}

export default ExplorePage;
