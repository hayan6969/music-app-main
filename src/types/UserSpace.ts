export interface IUserProfile {
  firstName: string;
  lastName: string;
  occupation?: Array<"composer" | "lyricist" | "arranger" | "producer">;
  hiring?: boolean;
  collaborationLyricsLangs?: string[];
  proficientMusicStyles?: string[];
  skilledInstruments?: string[];
  collaboratedSingers?: string;
  collaboratedPublisher?: string;
  companyOrStudio?: string;
  websiteUrl?: string; // Optional
  aboutMe?: string;
  softwareTool?: string; // Optional
  appleMusic?: string; // Optional
  spotify?: string; // Optional
  bandcam?: string; // Optional
  soundCloud?: string; // Optional
  x?: string; // Optional
  facebook?: string; // Optional
  iHeartRadio?: string; // Optional
  Genius?: string; // Optional
  location?: string;
  state?: string;
  city?: string;
  profilePicture?: string;
}

export const defaultStateUser = {
  firstName: "",
  lastName: "",
  occupation: [],
  hiring: false,
  collaborationLyricsLangs: [],
  proficientMusicStyles: [],
  skilledInstruments: [],
  collaboratedSingers: "",
  collaboratedPublisher: "",
  companyOrStudio: "",
  websiteUrl: "", // Optional
  aboutMe: "",
  softwareTool: "", // Optional
  appleMusic: "", // Optional
  spotify: "", // Optional
  bandcam: "", // Optional
  soundCloud: "", // Optional
  x: "", // Optional
  facebook: "", // Optional
  iHeartRadio: "", // Optional
  Genius: "", // Optional
  location: "",
  state: "",
  city: "",
  profilePicture: "",
};
