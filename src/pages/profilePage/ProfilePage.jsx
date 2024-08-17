import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../services/users";
const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector(state=>state.user)

    const {date:profileData,isLoading:profileIsLoading}= useQuery({
      queryFn:()=>{
        return getUserProfile({token:userData.userInfo.token})
      }
    })

   /* The `useEffect` hook in the provided code snippet is used to conditionally redirect the user to a
   different page based on the value of `userData`. Here's what it does: */
    useEffect(()=>{
      userData.userInfo !== null ? null : navigate("/")
    },[userData.userInfo])
    console.log(userData.userInfo.filterdData._id);

  const {
    register,
    handleSubmit,
    formState: { errors, isVaild },
    watch,reset

  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password:""
    },
    mode: "onChange",
  });

  const submitHanlder = (e) => {
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-20">
        <div>
          <h1 className=" text-center text-3xl sm:text-5xl font-bold">
            Profile Page
          </h1>

          <form
            onSubmit={handleSubmit(submitHanlder)}
            action=""
            className="flex flex-col gap-5 w-full  items-center  my-20"
          >

<div className="flex flex-col gap-2 items-start">
              <label
                className="text-semiblack  dark:text-white"
                htmlFor="email"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "name is required",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Name can only contain letters",                  },
                })}
                placeholder="Enter Name"
                className={`bg-transparent ${errors.email?.message ? "border-red-500":""} dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md`}
                type="name"
                id="name"
                name="name"
              />
              {errors.name?.message && (
                <p className="text-red-500 text-md">{errors.name?.message}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 items-start">
              <label
                className="text-semiblack  dark:text-white"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                placeholder="Enter Email"
                className={`bg-transparent ${errors.email?.message ? "border-red-500":""} dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md`}
                type="email"
                id="email"
                name="email"
              />
              {errors.email?.message && (
                <p className="text-red-500 text-md">{errors.email?.message}</p>
              )}
            </div>


            <div className="flex flex-col gap-2 items-start w-[300px] sm:w-[400px]">
              <button
                type="submit"
                className={`bg-primary w-full p-5 text-white rounded-lg my-4 `}
              >
                Update
              </button>

            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default ProfilePage;
