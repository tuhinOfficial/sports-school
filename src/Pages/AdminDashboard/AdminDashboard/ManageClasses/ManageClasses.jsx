import React from "react";

import {
  Card,
  Typography,
  CardBody,
  Avatar,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import useSports from "../../../../Hooks/useSports";
import { FaCheck } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import Swal from "sweetalert2";

const TABLE_HEAD = [
  "Class Image",
  "Class Name",
  "Instructor Name",
  "Instructor Email",
  "Seats",
  "Price",
  "Action",
];

const ManageClasses = () => {
  const [sports, refetch] = useSports();
  console.log(sports);

  const approvedHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You You Approve this Class",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approved it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/sports/${id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            console.log(data.modifiedCount);
            if (data.modifiedCount > 0) {
              Swal.fire("Added", "Class Added Successfully.", "success");
            }
          });
      }
    });
  };

  const denyHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Deny this Class",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Deny it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/sports/deny/${id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data.modifiedCount);
        if (data.modifiedCount > 0) {
          Swal.fire("Deny", "Class Deny Successfully", "success");
        }
      });
        
      }
    });
    
  };

  return (
    <div>
      <Card className="h-full w-full">
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="text-center">
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
              {sports.map(
                (
                  {
                    classImage,
                    className,
                    instructorName,
                    instructorEmail,
                    price,
                    seats,
                    _id,
                    status,
                  },
                  index
                ) => {
                  const isLast = index === sports.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={classImage}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {className}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {instructorName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {instructorEmail}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {seats}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <div className="flex gap-x-4">
                          <Tooltip content="Approved Class">
                            <Button
                              variant="gradient"
                              className="flex items-center gap-3"
                              onClick={() => approvedHandler(_id)}
                              disabled={status}
                            >
                              <FaCheck></FaCheck> Approved
                            </Button>
                          </Tooltip>
                          <Tooltip content="Deny Class">
                            <Button
                              onClick={() => denyHandler(_id)}
                              variant="gradient"
                              color="red"
                              className="flex items-center gap-3"
                              disabled={status}
                            >
                              <BsFillXCircleFill></BsFillXCircleFill> Deny
                            </Button>
                          </Tooltip>
                          <Tooltip content="FeedBack">
                            <Button
                              variant="gradient"
                              color="green"
                              className="flex items-center gap-3"
                              disabled={status}
                            >
                              <BsFillXCircleFill></BsFillXCircleFill> FeedBack
                            </Button>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageClasses;
