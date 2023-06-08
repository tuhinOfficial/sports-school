import React from "react";
import useSports from "../../../Hooks/useSports";
import Title from "../../../SharedPages/Title/Title";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import SportsCard from "../../../SharedPages/SportsCard/SportsCard";

const Classes = () => {
  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);

  const [sports] = useSports();

  //   console.log(sports);

  return (
    <div>
      <Title headers="All Classes"></Title>

      <div className="mb-5 flex justify-center">
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            type="text"
            label="Search"
            value={search}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={search ? "blue" : "blue-gray"}
            disabled={!search}
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>

      <div className="flex justify-end">
        <div className="w-72 mb-4 ">
          <Select size="md" label="Sort By">
            <Option>Popular</Option>
            <Option>Price</Option>
          </Select>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-10 mb-10">
        <SportsCard data={sports}></SportsCard>
      </div>
    </div>
  );
};

export default Classes;
