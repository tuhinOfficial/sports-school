import React, { useContext } from "react";
import Title from "../../../SharedPages/Title/Title";
import { Button, Input } from "@material-tailwind/react";
import { AuthContext } from "../../../Prividers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useMyClass from "../../../Hooks/useMyClass";

const img_hosting_token = import.meta.env.VITE_Image_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [, refetch] = useMyClass();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          // console.log(imgURL);
          console.log(data);
          const newItem = {
            className: data.className,
            classImage: imgURL,
            instructorName: data.name,
            instructorEmail: data.email,
            seats: data.seats,
            price: data.price,
            students:0
          };
          console.log(newItem);
          fetch("http://localhost:5000/sports", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newItem),
          })
            .then((res) => res.json())
            .then((data) => {
              refetch();
              console.log(data);
              if (data.insertedId) {
                Swal.fire({
                  icon: "success",
                  title: "Class Added Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          reset({
            className: "",
            seats: "",
            price: "",
          });
        }
      });
  };

  return (
    <div>
      <Title headers="Add A Class"></Title>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
            <div>
              <Input
                type="text"
                color="blue"
                label="Class Name"
                {...register("className", { required: true })}
              />
              {errors.className && <span>This field is required</span>}
            </div>

            <div>
              <input
                color="blue"
                type="file"
                label="Class Name"
                id=""
                accept=".jpg, .jpeg, .png"
                {...register("image", { required: true })}
              />
            </div>

            <Input
              type="text"
              color="blue"
              label="Instructor Name"
              defaultValue={user?.displayName}
              {...register("name", { required: true })}
              readOnly
            />

            <Input
              type="email"
              color="blue"
              label="Instructor Email"
              defaultValue={user?.email}
              readOnly
              {...register("email", { required: true })}
            />

            <div>
              <Input
                type="number"
                color="blue"
                label="Available Seats"
                min="0"
                {...register("seats", { required: true })}
              />
              {errors.className && <span>This field is required</span>}
            </div>

            <div>
              <Input
                type="number"
                color="blue"
                label="Price"
                min="0"
                {...register("price", { required: true })}
              />
              {errors.className && <span>This field is required</span>}
            </div>
          </div>
          <Button type="submit" color="green" className="w-full mt-6">
            Add A Class
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
