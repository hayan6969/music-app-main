import { Button } from "@material-tailwind/react";
import React from "react";

const musicUse = [
  "Pop Music",
  "Folk Music",
  "Game Music",
  "Movie Music",
  "Classical Music",
  "Children Music",
  "Dance Music",
  "Travel Music",
  "Animation Music",
  "Light Music",
];

const musicStyles = [
  "Ambient",
  "Blues",
  "Cinematic",
  "Classical",
  "Country",
  "Disco",
  "Dubstep",
  "Epic",
  "Folk",
  "Funk",
  "Hip hop",
  "Holiday",
  "House",
  "Indie Pop",
  "Jazz",
  "Latin",
  "Metal",
  "Neo-Soul",
  "New Age",
  "Orchestral",
  "Piano",
  "Pop",
  "R&B",
  "Rap",
  "Reggae",
  "Rock",
  "Samba",
  "Trap",
  "Underscore",
  "Video Game",
  "World",
];

function RightSideSecond() {
  return (
    <div className="mb-1 flex flex-col gap-10 mt-10">
      <div className="flex flex-col gap-1">
        <label
          htmlFor="default"
          className="block text-sm font-semibold text-gray-900 "
        >
          Music Use
        </label>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {musicUse.map((style, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`${style.toLowerCase()}-checkbox`}
                type="checkbox"
                value={style.toLowerCase()}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`${style.toLowerCase()}-checkbox`}
                className="ms-2 text-sm font-medium text-gray-900"
              >
                {style}
              </label>
            </div>
          ))}
        </div>
        {/* <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option defaultValue={"Select Music Usage"}>Select Music Use</option>

          <option value="pop-music">Pop Music</option>
          <option value="folk-music">Folk Music</option>
          <option value="game-music">Game Music</option>
          <option value="movie-music">Movie Music</option>
          <option value="classical-music">Classical Music</option>
          <option value="children-music">Children Music</option>
          <option value="dance-music">Dance Music</option>
          <option value="travel-music">Travel Music</option>
          <option value="animation-music">Animation Music</option>
          <option value="light-music">Light Music</option>
        </select> */}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="default"
          className="block text-sm font-semibold text-gray-900 "
        >
          Music Style
        </label>
        <select
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          required
        >
          <option defaultValue={"Select Music Usage"} disabled selected>
            Select Music Style
          </option>
          <option value="ambient">Ambient</option>
          <option value="blues">Blues</option>
          <option value="cinematic">Cinematic</option>
          <option value="classical">Classical</option>
          <option value="country">Country</option>
          <option value="disco">Disco</option>
          <option value="dubstep">Dubstep</option>
          <option value="epic">Epic</option>
          <option value="folk">Folk</option>
          <option value="funk">Funk</option>
          <option value="hip-hop">Hip hop</option>
          <option value="holiday">Holiday</option>
          <option value="house">House</option>
          <option value="indie-pop">Indie Pop</option>
          <option value="jazz">Jazz</option>
          <option value="latin">Latin</option>
          <option value="metal">Metal</option>
          <option value="neo-soul">Neo-Soul</option>
          <option value="new-age">New Age</option>
          <option value="orchestral">Orchestral</option>
          <option value="piano">Piano</option>
          <option value="pop">Pop</option>
          <option value="r&b">R&B</option>
          <option value="rap">Rap</option>
          <option value="reggae">Reggae</option>
          <option value="rock">Rock</option>
          <option value="samba">Samba</option>
          <option value="trap">Trap</option>
          <option value="underscore">Underscore</option>
          <option value="video-game">Video Game</option>
          <option value="world">World</option>
        </select>
        {/* <div className="grid grid-cols-3 gap-x-4 gap-y-2">
          {musicStyles.map((style, index) => (
            <div key={index} className="flex items-center">
              <input
                id={`${style.toLowerCase()}-checkbox`}
                type="checkbox"
                value={style.toLowerCase()}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={`${style.toLowerCase()}-checkbox`}
                className="ms-2 text-sm font-medium text-gray-900"
              >
                {style}
              </label>
            </div>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col gap-1">
        <label
          htmlFor="default"
          className="block text-sm font-semibold text-gray-900 "
        >
          Music Mood
        </label>
        <select
          // onFocus={(e) => {
          //   e.target.size = 5;
          // }}
          // onBlur={(e) => {
          //   e.target.size = 1;
          // }}
          id="default"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 "
        >
          <option defaultValue={"Select Music Usage"}>Select Music Mood</option>
          <option value="aggressive">Aggressive</option>
          <option value="beautiful">Beautiful</option>
          <option value="bright">Bright</option>
          <option value="busy">Busy</option>
          <option value="dark">Dark</option>
          <option value="driving">Driving</option>
          <option value="exciting">Exciting</option>
          <option value="feel-good">Feel-good</option>
          <option value="formal">Formal</option>
          <option value="funny">Funny</option>
          <option value="gentle">Gentle</option>
          <option value="happy">Happy</option>
          <option value="heroic">Heroic</option>
          <option value="hypnotic">Hypnotic</option>
          <option value="inspiring">Inspiring</option>
          <option value="laid-back">Laid-back</option>
          <option value="light-tension">Light Tension</option>
          <option value="magical">Magical</option>
          <option value="mechanical">Mechanical</option>
          <option value="neutral">Neutral</option>
          <option value="nostalgic">Nostalgic</option>
          <option value="peaceful">Peaceful</option>
          <option value="quirky">Quirky</option>
          <option value="reflective">Reflective</option>
          <option value="relaxed">Relaxed</option>
          <option value="romantic">Romantic</option>
          <option value="sad">Sad</option>
          <option value="scary">Scary</option>
          <option value="serious">Serious</option>
          <option value="sexy">Sexy</option>
          <option value="spooky">Spooky</option>
          <option value="stealthy">Stealthy</option>
          <option value="strange">Strange</option>
          <option value="tense">Tense</option>
          <option value="uplifting">Uplifting</option>
          <option value="urgent">Urgent</option>
          <option value="violent">Violent</option>
          <option value="warm">Warm</option>
          <option value="whimsical">Whimsical</option>
        </select>
      </div>
      <div className="flex justify-center items-center gap-2 max-w-[28rem] h-[13rem]">
        <Button
          className="bg-blue-200 text-black normal-case w-[16rem] flex items-center justify-center"
          color="blue"
          variant="filled"
        >
          <span className=" text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-800">
            PRO
          </span>
          Upgrade to gain more attention
        </Button>
      </div>
    </div>
  );
}

export default RightSideSecond;
