import React from "react";
import { Select, Option, Input, Button } from "@material-tailwind/react";
import useInstructor from "../../../Hooks/useInstructor";
import { Helmet } from "react-helmet-async";
import Title from "../../../SharedPages/Title/Title";
import InstructorsCard from "../../../SharedPages/InstructorsCard/InstructorsCard";

const Instructors = () => {
  const [instructors] = useInstructor();
  console.log(instructors);

  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);

  return (
    <div>
      <Helmet>
        <title>Sports School | Instructors</title>
      </Helmet>
      <Title headers="All Instructors"></Title>

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

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-5 my-10">
        <InstructorsCard data={instructors}></InstructorsCard>
      </div>
    </div>
  );
};

export default Instructors;
