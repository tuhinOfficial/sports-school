import React from "react";
import { Button, Card,Typography } from "@material-tailwind/react";
import { FaTrashAlt } from "react-icons/fa";
import { BiDollarCircle } from "react-icons/bi";
import useBookmark from "../../../../Hooks/useBookmark";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const TABLE_HEAD = [
  "Name",
  "Class Name",
  "Instructors",
  "Price",
  "payment",
  "Delete",
];

const UserBookmarks = () => {
  const [bookmarks, refetch] = useBookmark();
  console.log(bookmarks);

  const deleteHandler = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "Do You Want to Delete",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/userbookmarks/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Successfully delete Your Bookmark",
                "success"
              );
            }
          });
      }
    });
  };

  // Swal.fire("Deleted!", "Your file has been deleted.", "success");

  return (
    <div>
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
              {bookmarks.map((item, index) => (
                <tr key={index} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.className}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {item.instructorName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography variant="h6" className="font-medium">
                      {item.price} $
                    </Typography>
                  </td>
                  <td>
                    <div className="flex gap-2">
                      <Link to="/payment" state={item}>
                        <Button
                          variant="gradient"
                          className="flex items-center gap-3"
                        >
                          <BiDollarCircle className="text-[22px]"></BiDollarCircle>{" "}
                          Payment
                        </Button>
                      </Link>
                    </div>
                  </td>
                  <td className="p-4">
                    <Typography
                      as="a"
                      variant="lead"
                      color="blue"
                      className="font-medium cursor-pointer"
                    >
                      <FaTrashAlt
                        onClick={() => deleteHandler(item?._id)}
                        className="text-2xl text-red-600"
                      ></FaTrashAlt>
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
