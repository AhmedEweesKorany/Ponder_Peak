import React, { useEffect, useState } from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useForm } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";
import {  redirect, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserProfile, updateProfile } from "../../services/users";
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture";
import { setUserInfo } from "../../store/reducers/userReducer";
import toast from "react-hot-toast";
import { BsCheckLg } from "react-icons/bs";
const ProfilePage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector(state=>state.user)
    const queryClient = useQueryClient()

    const {data:profileData,isLoading:profileIsLoading,error:profileError}= useQuery({
      queryFn:()=>{
        return getUserProfile({token:userData.userInfo.token})
      },
      queryKey:["profile"]
    })


    const {mutate,isPending}=useMutation({
      mutationFn:({name,email,password})=>{
          return updateProfile({token:userData.userInfo.token,userData:{name,email,password}}) // should return a promise 
      },
      onSuccess: data=> {
        
/* The line `const {password,...filterdData} = data.user` is using object destructuring in JavaScript
to extract the `password` property from the `data.user` object and store it in a variable called
`password`. The rest of the properties in the `data.user` object are then collected and stored in a
new object called `filterdData`. */
           
          // LocalStorage Update
let accountData = JSON.parse(localStorage.getItem("account"));

if (accountData) {
    accountData.filterdData = data.data;
} else {
    accountData = { filterdData: data.data };
}

localStorage.setItem("account", JSON.stringify(accountData));
queryClient.invalidateQueries(["profile"])
console.log(JSON.parse(localStorage.getItem("account")))
// Redux Update
dispatch(setUserInfo(JSON.parse(localStorage.getItem("account"))));

          toast.success(data.message)
      },
      onError: error=> {
          console.log(error);
          toast.error(error.message)
      }
  })


   /* The `useEffect` hook in the provided code snippet is used to conditionally redirect the user to a
   different page based on the value of `userData`. Here's what it does: */
    useEffect(()=>{
      userData.userInfo !== null ? null : navigate("/")
    },[userData.userInfo])

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
    values:{
        name : profileData?.name,
         email:profileData?.email,
        //  password:profileData?.password
    },
    mode: "onChange",
  });

  const submitHanlder = (e) => {
    const {name,email,password} = e
    mutate({name,email,password})
  };
  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-20 ">
        <div>
          <h1 className=" text-center text-3xl sm:text-5xl font-bold">
            Profile Page
          </h1>
          <div className="flex items-center justify-center flex-col"> 

        <ProfilePicture avatar={userData?.userInfo?.filterdData?.avatar}/>

<div className="flex gap-x-4 items-center"> 
        <h1 className="text-3xl dark:text-white font-bold block">{userData?.userInfo?.filterdData?.name}</h1>
{userData?.userInfo?.filterdData?.verified && <>
          <span className="bg-green-100 p-2 rounded-full text-green-700" >
                  <BsCheckLg />
                  </span>
        </>}
</div>
    
          </div>
          <form
            onSubmit={handleSubmit(submitHanlder)}
            action=""
            className="flex flex-col gap-5 w-full  items-center  my-20"
          >

<div className="flex flex-col gap-2 items-start">
              <label className="text-semiblack  dark:text-white" htmlFor="name">
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                  maxLength: {
                    value: 20,
                    message: "Name must be at most 20 characters",
                  },
                })}
                placeholder="Enter Name"
                className={`bg-transparent ${errors.name?.message ? "border-red-500":""} dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md`}
                type="text"
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
            <div className="flex flex-col gap-2 items-start">
              <label
                className="text-semiblack  dark:text-white"
                htmlFor="password"
              >
                New Password (optional)
              </label>
              <input
                {...register("password")}
                placeholder="Enter New Password"
                className={`bg-transparent ${errors.password?.message ? "border-red-500":""} dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md`}
                type="password"
                id="password"
                name="password"
              />
              {errors.password?.message && (
                <p className="text-red-500 text-md">
                  {errors.password?.message}
                </p>
              )}
            </div>{" "}

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
