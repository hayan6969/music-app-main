import { CATEGORIES } from "@/dummy/example";
import MusicianBox from "@/components/music-box/musician-box";
import MusicPlayerDialog from "@/components/music-player/music-player-dialog";

export function FindCreatives() {
  return (
    <>
      <section className="grid min-h-screen">
        <MusicPlayerDialog />
        <div className="py-4 flex justify-items-start items-start sm:justify-start">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {CATEGORIES.map((props, key) => (
                <MusicianBox key={key} {...props} isMusicAsset={true} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FindCreatives;
