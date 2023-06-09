import React from "react";
import Title from "../../../../SharedPages/Title/Title";
import { Card, Typography } from "@material-tailwind/react";
import { FaTrashAlt } from "react-icons/fa";

const TABLE_HEAD = ["Name", "Class Name", "Instructors", "Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const UserBookmarks = () => {
  return (
    <div>
      <Title headers="My Bookmarked Classes"></Title>
      <div>
        <Card className="overflow-scroll h-full w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, job, date }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue"
                      className="font-medium"
                    >
                      <FaTrashAlt className="text-2xl text-red-600"></FaTrashAlt>
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};

export default UserBookmarks;
