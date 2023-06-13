import React, { useContext } from "react";
import { BsPencilSquare, BsTrash } from "react-icons/bs";
import { AuthContext } from "../../../../Prividers/AuthProvider";
import useMyClass from "../../../../Hooks/useMyClass";
import Swal from "sweetalert2";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Image",
  "Class Name",
  "Instructor Name",
  "Instructor Email",
  "Status",
  "Feedback",
  "Enrolled Students",
  "Action",
];

const MyClasses = () => {
  const { user } = useContext(AuthContext);

  const [myClass, refetch] = useMyClass();

  console.log(myClass);

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/sports/${id}`, {
          method: "Delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Class Deleted Successfully", "success");
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
            <thead>
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
              {myClass.map((item, index) => {
                const isLast = index === myClass.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>
                      <div className="">
                        <Avatar
                          src={item.classImage}
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
                        {item.className}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.instructorName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {item.instructorEmail}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={item.status ? item.status : "pending"}
                          color={
                            item.status === "approved"
                              ? "green"
                              : item.status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Added Soon
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Added Soon
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-x-2">
                        <Tooltip content="Update Class">
                          <Link to="/updateClass" state={item}>
                            {" "}
                            <Button
                              disabled={
                                item.status === "approved" || item.status === "deny"
                              }
                            >
                              <BsPencilSquare className="text-[18px]"></BsPencilSquare>
                            </Button>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Delete Class">
                          <Button
                            onClick={() => deleteHandler(item?._id)}
                            disabled={
                              item.status === "approved" || item.status === "deny"
                            }
                          >
                            <BsTrash className="text-[18px]"></BsTrash>
                          </Button>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default MyClasses;
