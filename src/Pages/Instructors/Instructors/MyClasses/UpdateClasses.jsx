import React, { useContext } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Title from "../../../../SharedPages/Title/Title";
import { AuthContext } from "../../../../Prividers/AuthProvider";
import useMyClass from "../../../../Hooks/useMyClass";
import { Link, useLocation, useNavigate } from "react-router-dom";

const img_hosting_token = import.meta.env.VITE_Image_token;
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

const UpdateClasses = () => {
  const { user } = useContext(AuthContext);

  const location = useLocation();
  const item = location?.state;
  const id = item?._id;
  const navigate = useNavigate();

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
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const updateData = {
            className: data.className,
            classImage: imgURL,
            seats: data.seats,
            price: data.price,
          };
          fetch(`https://sport-school-server-tuhinofficial.vercel.app/sports/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
          })
            .then((res) => res.json())
            .then((data) => {
              refetch();
              if (data.modifiedCount > 0) {
                Swal.fire({
                  icon: "success",
                  title: "Class Update Successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate('/dashboard', {replace: true});
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
      <Title headers="Update A Class"></Title>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3">
            <div>
              <Input
                type="text"
                color="blue"
                label="Class Name"
                defaultValue={item.className}
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
                defaultValue={item.seats}
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
                defaultValue={item.price}
                {...register("price", { required: true })}
              />
              {errors.className && <span>This field is required</span>}
            </div>
          </div>
          <Button type="submit" color="green" className="w-full mt-6">
            Update A Class
          </Button>
        </form>

        <div className="flex justify-center mt-5">
          <Link to="/dashboard"><Button variant="outlined">Back To Dashboard</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateClasses;
