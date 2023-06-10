import React, { useContext } from "react";
import Title from "../../../SharedPages/Title/Title";
import { Button, Input } from "@material-tailwind/react";
import { AuthContext } from "../../../Prividers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useMyClass from "../../../Hooks/useMyClass";

const AddClass = () => {

    const {user} = useContext(AuthContext);
    const { register, handleSubmit , reset } = useForm();
    const [, refetch] = useMyClass();
    
    const onSubmit = data =>{
        console.log(data);
        const newItem = {
            className:data.className,
            classImage:data.classImage,
            instructorName:data.name,
            instructorEmail:data.email,
            seats:data.seats,
            price:data.price,
        }
        console.log(newItem);

        fetch('http://localhost:5000/sports' ,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data=>{
           refetch();
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    title: 'Class Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        reset({
          className: "",
          classImage: "",
          name: "",
          email: "",
          seats: "",
          price: "",
        });

    };

  return (
    <div>
      <Title headers="Add A Class"></Title>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[70%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-8 place-items-center">
            <Input type="text" color="blue" label="Class Name" {...register("className", { required: true })}/>
            <Input type="url" color="blue" label="Class Image" {...register("classImage", { required: true })}/>
            <Input type="text" color="blue" label="Instructor Name" defaultValue={user?.displayName} {...register("name", { required: true })} readOnly />
            <Input type="email" color="blue" label="Instructor Email" defaultValue={user?.email} readOnly {...register("email", { required: true })}/>
            <Input type="number" color="blue" label="Available Seats" {...register("seats", { required: true })}/>
            <Input type="number" color="blue" label="Price" {...register("price", { required: true })}/>
          </div>
          <Button type="submit" color="green" className="w-full mt-6">Add A Class</Button>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
