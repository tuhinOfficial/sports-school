import React from "react";
import Title from "../../../../SharedPages/Title/Title";
import InstructorsCard from "../../../../SharedPages/InstructorsCard/InstructorsCard";
import useUsers from "../../../../Hooks/useUsers";

const PopularInstructors = () => {
  const [users] = useUsers();
  const instructors = users.filter((user)=>user.role === "instructor")

  const popular = instructors.slice(0, 6);

  return (
    <div>
      <Title headers="Popular Instructors"></Title>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-14 mb-10">
        <InstructorsCard data={popular}></InstructorsCard>
      </div>
    </div>
  );
};

export default PopularInstructors;
