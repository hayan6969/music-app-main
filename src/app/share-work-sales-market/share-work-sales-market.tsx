"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { defaultMusicAsset, IMusicAsset } from "@/types/ShareMusicAsset";
import { useLocalStorage } from "@/context/LocalStorageContext";
import { removeEmptyStrings } from "@/utils/utils";
import { Toast } from "primereact/toast";
import { useForm, SubmitHandler } from "react-hook-form";

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

export function ShareWorkSalesMarket() {
  const toast = useRef<Toast>(null);
  const { getItem, setItem } = useLocalStorage();
  const [auth, setAuth] = useState<any>(getItem("auth", null));
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IMusicAsset>();
  const [formData, setFormData] = useState<IMusicAsset>(defaultMusicAsset);

  const handlePersonalUse = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setIsPersonalUse(checked); // Update the state with the checkbox's checked value
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: isPersonalUse };
      return updatedData;
    });
  };

  const handleCommercialUse = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setIsCommercialUse(checked); // Update the state with the checkbox's checked value
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: isCommercialUse };
      return updatedData;
    });
  };

  const handleCollaborationContact = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, checked } = e.target;
    setIsContract(checked); // Update the state with the checkbox's checked value
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: isContract };
      return updatedData;
    });
  };

  const [checkedItems, setCheckedItems] = useState<string[]>([]); // Array to hold checked values
  const [isPersonalUse, setIsPersonalUse] = useState(false);
  const [isCommercialUse, setIsCommercialUse] = useState(false);
  const [isContract, setIsContract] = useState(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [musicPreview, setMusicPreview] = useState<string | null>(null);
  const [fileImage, setFileImage] = useState<File | null>(null);
  const [fileMusic, setFileMusic] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      console.log("File selected:", selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(selectedFile);
      setFileImage(selectedFile);
      setFormData((prev) => ({
        ...prev,
        ["musicImage"]: "", // Reset musicImage or keep it based on your logic
      }));
    }
  };

  useEffect(() => {
    const uploadImage = async () => {
      console.log("masuk");
      if (!fileImage) return; // No file selected
      console.log("sini ga");
      console.log("Uploading image:", fileImage);

      const musicImage = new FormData();
      musicImage.append("musicImage", fileImage);

      console.log(musicImage);
      try {
        const response = await fetch(
          "http://localhost:3002/v1/upload/music-image",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${auth.tokens.access.token}`,
            },
            body: musicImage,
          }
        );
        console.log(response);

        if (response.ok) {
          console.log("Upload successful");
          const result = await response.json();
          setFormData((prev) => {
            const updatedData = { ...prev, ["musicImage"]: "" };
            return updatedData;
          });
          toast.current?.show({
            severity: "success",
            summary: "Success",
            detail: "Upload Music Image successful!",
            life: 3000,
          });
        } else {
          const errorResult = await response.json();
          toast.current?.show({
            severity: errorResult.code === 422 ? "warn" : "error",
            summary: errorResult.code === 422 ? "Warning" : "Error",
            detail: `Error: ${
              errorResult.message || "Failed to upload Music Image"
            }`,
            life: 3000,
          });
        }
      } catch (error) {
        console.error("Error during Upload Music Image:", error);
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "An unexpected error occurred.",
          life: 3000,
        });
      }
    };

    const uploadMusic = async () => {
      console.log("masuk");
      if (!fileMusic) return; // No file selected
      console.log("sini ga");
      console.log("Uploading Music:", fileMusic);

      const track = new FormData();
      track.append("track", fileMusic);

      console.log("fileMusic", fileMusic);
      console.log("track", track);
      try {
        const response = await fetch("http://localhost:3002/v1/tracks", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${auth.tokens.access.token}`,
          },
          body: track,
        });
        console.log(response);

        if (response.ok) {
          console.log("Upload successful");
          const result = await response.json();
          setFormData((prev) => {
            const updatedData = { ...prev, ["music"]: "" };
            return updatedData;
          });
          toast.current?.show({
            severity: "success",
            summary: "Success",
            detail: "Upload Music Track successful!",
            life: 3000,
          });
        } else {
          const errorResult = await response.json();
          toast.current?.show({
            severity: errorResult.code === 422 ? "warn" : "error",
            summary: errorResult.code === 422 ? "Warning" : "Error",
            detail: `Error: ${
              errorResult.message || "Failed to upload Music Track"
            }`,
            life: 3000,
          });
        }
      } catch (error) {
        console.error("Error during Upload Music Image:", error);
        toast.current?.show({
          severity: "error",
          summary: "Error",
          detail: "An unexpected error occurred.",
          life: 3000,
        });
      }
    };

    // Call uploadImage if a file is selected
    if (fileImage) {
      uploadImage();
    }

    if (fileMusic) {
      uploadMusic();
    }
  }, [fileImage, fileMusic]); // Effect runs when 'file' changes

  const handleFileMusicChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMusicPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
      setFileMusic(selectedFile);
      setFormData((prev) => {
        const updatedData = { ...prev, ["music"]: "" };
        return updatedData;
      });
    }
    setFormData((prev) => {
      const updatedData = { ...prev, ["music"]: "" };
      return updatedData;
    });
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCheckedItems((prev) => {
      if (e.target.checked) {
        // If checked, add value to the array
        const newCheckedItems = [...prev, value];
        setFormData((prev) => {
          const updatedData = { ...prev, [name]: newCheckedItems };
          return updatedData;
        });
        return newCheckedItems;
      } else {
        // If unchecked, remove value from the array
        const newCheckedItems = prev.filter((item) => item !== value);
        setFormData((prev) => {
          const updatedData = { ...prev, [name]: newCheckedItems };
          return updatedData;
        });
        return newCheckedItems;
      }
    });
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      console.log(updatedData);
      return updatedData;
    });
  };

  const onSubmit: SubmitHandler<IMusicAsset> = async (data) => {
    console.log(formData);
    console.log("submit", data);
    // let cleanedData = removeEmptyStrings(formData);
    // try {
    //   const response = await fetch("http://localhost:3002/v1/user-space/add", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${auth.tokens.access.token}`,
    //     },
    //     body: JSON.stringify(cleanedData),
    //   });

    //   if (response.ok) {
    //     const result = await response.json();
    //     toast.current?.show({
    //       severity: "success",
    //       summary: "Success",
    //       detail: "Space Created successfully!",
    //       life: 3000,
    //     });
    //     // window.location.href = "/user-space";
    //   } else {
    //     const errorResult = await response.json();
    //     toast.current?.show({
    //       severity: `${errorResult.code == 422 ? "warn" : "error"}`,
    //       summary: `${errorResult.code == 422 ? "Warning" : "Error"}`,
    //       detail: `Error: ${errorResult.message || "Failed to update space"}`,
    //       life: 3000,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Error during edit user space:", error);
    //   toast.current?.show({
    //     severity: "error",
    //     summary: "Error",
    //     detail: "An unexpected error occurred.",
    //     life: 3000,
    //   });
    // }
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(formData);
    event.preventDefault();
    console.log("Button clicked");

    const onSubmitResult = await handleSubmit(onSubmit)();
    console.log("Submit Music Assets:", onSubmitResult);

    // Check if errors exist
    if (Object.keys(errors).length > 0) {
      console.log("Validation errors:", errors);
    }
  };
  console.log(formData);

  const [tags, setTags] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tagValue = e.target.value;
    setTags(tagValue);

    // Split the tags by comma and filter out empty values
    const tagArray = tagValue
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag.length > 0);

    // Check if there are at least 3 tags
    if (tagArray.length < 3) {
      setError("Please enter at least 3 tags separated by commas.");
    } else {
      setError("");
    }
  };

  return (
    <section className="flex flex-row justify-center items-center my-8">
      <Toast ref={toast} />
      <form className="flex flex-col gap-2">
        <div className="flex flex-row gap-8">
          <div className="w-96">
            {/* LEFT */}
            <div className="mb-1 flex flex-col gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-bold"
              >
                Music Name
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.musicName}
                {...register("musicName", {
                  required: "Music Name is required",
                })}
                onChange={handleChange}
                error={!!errors.musicName}
              />
              {errors.musicName ? (
                <p style={{ color: "red" }}>{errors.musicName.message}</p>
              ) : (
                ""
              )}
              <div className="flex flex-col gap-4">
                <div className="flex justify-center items-center gap-2">
                  <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
                    Upload Music Image
                    <label
                      htmlFor="dropzone-file"
                      className={`flex flex-col items-center justify-center w-[10rem] h-[10rem] border-2 ${
                        errors.musicImage ? "border-red-300" : "border-gray-300"
                      } border-dashed rounded-lg cursor-pointer bg-gray-50`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Less than 1M</span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        value={formData.musicImage}
                        {...register("musicImage", {
                          required: "Music Image is required",
                          onChange: handleFileChange, // Handle file change directly here
                        })}
                      />
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          alt="Thumbnail"
                          className="w-[10rem] h-[10rem] object-cover shadow-md absolute hover:scale-105 rounded-md"
                        />
                      ) : (
                        ""
                      )}
                    </label>
                    {errors.musicImage ? (
                      <p style={{ color: "red" }}>
                        {errors.musicImage.message}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-[18rem] flex flex-col justify-center items-center gap-2 font-semibold text-sm">
                    Upload Music
                    <label
                      htmlFor="dropzone-file-music"
                      className={`flex flex-col items-center justify-center w-[10rem] h-[6rem] border-2 ${
                        errors.music ? "border-red-300" : "border-gray-300"
                      } border-dashed rounded-lg cursor-pointer bg-gray-50`}
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Less than 20M</span>
                        </p>
                      </div>
                      <input
                        id="dropzone-file-music"
                        type="file"
                        className="hidden"
                        value={formData.music}
                        {...register("music", {
                          required: "Music is required",
                          onChange: handleFileMusicChange, // Handle file change directly here
                        })}
                      />
                      {musicPreview ? (
                        <img
                          src={musicPreview}
                          alt="music Thumbnail"
                          className="w-[10rem] h-[6rem] object-cover shadow-md absolute hover:scale-105 rounded-md"
                        />
                      ) : (
                        ""
                      )}
                    </label>
                    {errors.music ? (
                      <p style={{ color: "red" }}>{errors.music.message}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 max-w-[28rem]">
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
                <div className="flex flex-col gap-1 my-6">
                  <p className="text-black font-bold text-sm">Music Sales</p>
                  <div className="flex flex-row items-center gap-3 justify-between h-[2.7rem] max-h-[2.7rem]">
                    <div className="flex items-center">
                      <input
                        id="inline-music-sales"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        checked={
                          formData.personalUse
                            ? formData.personalUse
                            : isPersonalUse
                        }
                        onChange={handlePersonalUse}
                      />
                      <label
                        htmlFor="inline-music-sales"
                        className="ms-1 text-sm font-medium text-gray-900 "
                      >
                        Personal Use
                      </label>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1">
                      US$
                      <div className="max-w-[5rem]">
                        <input
                          type="number"
                          id="cvv-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-3 justify-between h-[2.7rem] max-h-[2.7rem]">
                    <div className="flex items-center">
                      <input
                        id="inline-music-sales-2"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        checked={
                          formData.commercialUse
                            ? formData.commercialUse
                            : isCommercialUse
                        } // Controlled component
                        onChange={handleCommercialUse}
                      />
                      <label
                        htmlFor="inline-music-sales-2"
                        className="ms-1 text-sm font-medium text-gray-900 "
                      >
                        Commercial Use
                      </label>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-1">
                      US$
                      <div className="max-w-[5rem]">
                        <input
                          type="number"
                          id="cvv-input"
                          aria-describedby="helper-text-explanation"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[2.7rem] max-h-[2.7rem]">
                    <input
                      id="inline-music-sales-3"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                      checked={
                        formData.collaborationContact
                          ? formData.collaborationContact
                          : isContract
                      } // Controlled component
                      onChange={handleCollaborationContact}
                    />
                    <label
                      htmlFor="inline-music-sales-3"
                      className="ms-1 text-sm font-medium text-gray-900 "
                    >
                      Collaboration Contact
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96">
            {/* RIGHT */}
            <div className="mb-1 flex flex-col gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                My Role (Multiple Choice)
              </Typography>

              <div className="flex">
                <div className="flex items-center me-4">
                  <input
                    id="inline-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    {...register("myRole", {
                      required: "At least one Role is required",
                    })}
                    value="composer"
                    checked={checkedItems.includes("composer")} // Check if this option is included
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor="inline-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Composer
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="inline-2-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    {...register("myRole")}
                    value="lyricist"
                    checked={checkedItems.includes("lyricist")} // Check if this option is included
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor="inline-2-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Lyricist
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="inline-3-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    {...register("myRole")}
                    value="arranger"
                    checked={checkedItems.includes("arranger")} // Check if this option is included
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor="inline-3-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Arranger
                  </label>
                </div>
                <div className="flex items-center me-4">
                  <input
                    id="inline-4-checkbox"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    {...register("myRole")}
                    value="producer"
                    checked={checkedItems.includes("producer")} // Check if this option is included
                    onChange={handleCheckbox}
                  />
                  <label
                    htmlFor="inline-4-checkbox"
                    className="ms-2 text-sm font-medium text-gray-900 "
                  >
                    Producer
                  </label>
                </div>
              </div>
              {errors.myRole ? (
                <p style={{ color: "red" }}>{errors.myRole.message}</p>
              ) : (
                ""
              )}

              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Creation Time
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.creationTime}
                {...register("creationTime", {
                  required: "Creation Time is required",
                })}
                onChange={handleChange}
                error={!!errors.creationTime}
              />
              {errors.creationTime ? (
                <p style={{ color: "red" }}>{errors.creationTime.message}</p>
              ) : (
                ""
              )}
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
                  {...register("musicUsage", {
                    required: "Music usage is required.",
                  })}
                >
                  <option defaultValue={"Select Music Usage"}>
                    Select Music Use
                  </option>

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
                {errors.musicUsage ? (
                  <p className="text-red-500 text-xs">
                    {errors.musicUsage.message}
                  </p>
                ) : (
                  ""
                )}
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
                  {...register("musicStyle", {
                    required: "Music Style is required.",
                  })}
                >
                  <option defaultValue={"Select Music Style"} disabled selected>
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
                {errors.musicStyle ? (
                  <p className="text-red-500 text-xs">
                    {errors.musicStyle.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="default"
                  className="block text-sm font-semibold text-gray-900 "
                >
                  Music Mood
                </label>
                <select
                  id="default"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  {...register("musicMood", {
                    required: "Music Mood is required.",
                  })}
                >
                  <option defaultValue={"Select Music Usage"}>
                    Select Music Mood
                  </option>
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
                {errors.musicMood ? (
                  <p className="text-red-500 text-xs">
                    {errors.musicMood.message}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="my-2 w-full">
            {/* BOTTOM */}
            <div className="mb-1 flex flex-col gap-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Musical Instrument (Optional)
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.musicInstrument}
                {...register("musicInstrument")}
                onChange={handleChange}
              />
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Tags (Fill in the key attribute words of the song for easy
                search, separated by commas)
              </Typography>
              <Input
                crossOrigin=""
                size="lg"
                placeholder="e.g., Jazz, Acoustic, Instrumental"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={tags}
                onChange={handleTagChange}
              />
              {error && (
                <label color="red" className="text-red-500 -mt-4 text-xs">
                  {error}
                </label>
              )}
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Description
              </Typography>
              <Textarea
                className="w-96 h-56"
                value={formData.description}
                {...register("description", {
                  required: "Description is required",
                })}
                onChange={handleChange}
                error={!!errors.description}
              />
              {errors.description ? (
                <p style={{ color: "red" }}>{errors.description.message}</p>
              ) : (
                ""
              )}
              <Typography
                variant="small"
                color="blue-gray"
                className="-mb-3 font-semibold"
              >
                Software Tool (Optional)
              </Typography>
              <Input
                crossOrigin={""}
                size="lg"
                placeholder=""
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                value={formData.softwareTool}
                {...register("softwareTool")}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div>
            <Button
              className="bg-blue-gray-100 text-black w-[8rem]"
              color="blue-gray"
              variant="outlined"
              fullWidth
            >
              Cancel
            </Button>
          </div>
          <div className="flex flex-row gap-6">
            <Button
              className="bg-blue-gray-100 text-black w-[14rem]"
              color="blue-gray"
              variant="outlined"
              fullWidth
            >
              Save as Draft
            </Button>
            <Button
              type="button"
              onClick={handleClick}
              className="w-[14rem]"
              color="blue"
              fullWidth
            >
              Publish
            </Button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ShareWorkSalesMarket;
