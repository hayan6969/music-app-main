import { Typography, Input, Textarea } from "@material-tailwind/react";
import React, { useState } from "react";

function BottomPart() {
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
    <div className="mb-1 flex flex-col gap-6">
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
      />
      <Typography
        variant="small"
        color="blue-gray"
        className="-mb-3 font-semibold"
      >
        Tags (Fill in the key attribute words of the song for easy search,
        separated by commas)
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
      <Textarea className="w-96 h-56" />
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
      />
    </div>
  );
}

export default BottomPart;
