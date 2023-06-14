import React from "react";
import Title from "../../../SharedPages/Title/Title";
import "./Achievement.css";
import CountUp from "react-countup";
import useSports from "../../../Hooks/useSports";
import useUsers from "../../../Hooks/useUsers";

const Achievement = () => {
  const [sports] = useSports();
  const approvedClasses = sports.filter((item) => item.status === "approved");
  const [users] = useUsers();
  const instructors = users.filter((user)=>user.role === "instructor")
  const totalClasses = approvedClasses.length;
  const totalInstructor = instructors.length;
  return (
    <div className="my-10">
      <Title headers="Our Achievements"></Title>
      <div className="achievement py-12 flex justify-evenly text-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#FFFFFF]">Classes</h1>
          <CountUp
            start={0}
            end={totalClasses}
            delay={0}
            redraw={true}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span className="text-2xl text-white" ref={countUpRef}>
                  {totalClasses}
                </span>
              </div>
            )}
          </CountUp>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#FFFFFF]">Instructor</h1>
          <CountUp
            start={0}
            end={totalInstructor}
            delay={2}
            redraw={true}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span className="text-2xl text-white" ref={countUpRef}>
                  {totalInstructor}
                </span>
              </div>
            )}
          </CountUp>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-[#FFFFFF]">Students</h1>
          <CountUp
            start={0}
            end={100}
            delay={0}
            redraw={true}
            enableScrollSpy={true}
          >
            {({ countUpRef }) => (
              <div>
                <span className="text-2xl text-white" ref={countUpRef}>
                  00
                </span>
              </div>
            )}
          </CountUp>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
