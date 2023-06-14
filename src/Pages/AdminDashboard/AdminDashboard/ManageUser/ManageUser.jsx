import React from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import useUsers from "../../../../Hooks/useUsers";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Name", "Email", "Role", "Action"];

const ManageUser = () => {
  const [users, refetch] = useUsers();

  const makeInstructor = (user) => {
    Swal.fire({
      title:"Are you sure Make Instructor?",
      text: user.email,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-school-server-tuhinofficial.vercel.app/user/instructor/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire("SuccessFully Instructor", "success");
            }
          });
      }
    });
  };

  const makeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure Make Admin?",
      text: user.email,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sport-school-server-tuhinofficial.vercel.app/user/admin/${user?._id}`, {
          method: "PATCH",
        })
          .then((res) => res.json())
          .then((data) => {
            refetch();
            if (data.modifiedCount) {
              Swal.fire("Successfully Admin","success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Card className="overflow-scroll h-full w-full">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 text-center"
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
            {users.map((user, index) => (
              <tr key={index} className="even:bg-blue-gray-50/50">
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.name}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.email}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {user.role? user.role : "User"}
                  </Typography>
                </td>
                <td className="p-4">
                  <div className="flex gap-3">
                    <Button
                      disabled={
                        user.role === "instructor" || user.role === "admin"
                      }
                      onClick={() => makeInstructor(user)}
                      variant="gradient"
                      className="flex items-center gap-3"
                    >
                      Make Instructor
                    </Button>
                    <Button
                      disabled={
                        user.role === "instructor" || user.role === "admin"
                      }
                      onClick={()=>makeAdmin(user)}
                      variant="gradient"
                      className="flex items-center gap-3"
                    >
                      Make Admin
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default ManageUser;
