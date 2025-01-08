import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import CardJobs from "@/components/card-jobs";
import { JOBS_PROPS } from "@/dummy/example";

export function CheckboxHorizontalListGroup() {
  return (
    <Card
      className="w-full max-h-[2.4rem] border-[0.090rem] border-blue-gray-100 shadow-none mt-[0.1rem] rounded-md"
      shadow={false}
      color={"transparent"}
    >
      <List className="flex-row p-0">
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-react"
            className="flex w-full cursor-pointer items-center px-1 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                crossOrigin={""}
                id="horizontal-list-react"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs">
              Compose
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-vue"
            className="flex w-full cursor-pointer items-center px-1 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                crossOrigin={""}
                id="horizontal-list-vue"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs">
              Arrange
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-svelte"
            className="flex w-full cursor-pointer items-center px-1 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                crossOrigin={""}
                id="horizontal-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs">
              Produce
            </Typography>
          </label>
        </ListItem>
        <ListItem className="p-0">
          <label
            htmlFor="horizontal-list-svelte"
            className="flex w-full cursor-pointer items-center px-1 py-2"
          >
            <ListItemPrefix className="mr-3">
              <Checkbox
                crossOrigin={""}
                id="horizontal-list-svelte"
                ripple={false}
                className="hover:before:opacity-0"
                containerProps={{
                  className: "p-0",
                }}
              />
            </ListItemPrefix>
            <Typography color="blue-gray" className="font-medium text-xs">
              Write Lyrics
            </Typography>
          </label>
        </ListItem>
      </List>
    </Card>
  );
}

export function Freelance() {
  return (
    <>
      <section className="grid min-h-screen">
        <div className="flex flex-row justify-start gap-2">
          <div className="flex flex-row justify-start gap-1 w-[37rem] max-w-[37rem]">
            <Input crossOrigin={""} label="Search" size="md" />
            <Select size="md" label="Music Cultural Region">
              <Option>Music Cultural Region 1</Option>
              <Option>Music Cultural Region 2</Option>
              <Option>Music Cultural Region 3</Option>
              <Option>Music Cultural Region 4</Option>
              <Option>Music Cultural Region 5</Option>
            </Select>
          </div>
          <div className="w-[28rem]">
            <CheckboxHorizontalListGroup />
          </div>
        </div>
        <div className="py-4 flex justify-items-start items-start sm:justify-start">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {JOBS_PROPS.map((props, key) => (
                <CardJobs key={key} {...props} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Freelance;
