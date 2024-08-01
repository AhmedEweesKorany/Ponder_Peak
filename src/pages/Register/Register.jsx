import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { singUp } from "../../services/users";
import toast from "react-hot-toast";

const Register = () => {
    
    const {mutate,isPending}=useMutation({
        mutationFn:({name,email,password})=>{
            return singUp({name,email,password}) // should return a promise 
        },
        onSuccess: data=> {
            console.log(data);
            toast.success(data.message)
        },
        onError: error=> {
            console.log(error);
            toast.error(error.message)
        }
    })
  const {
    register,
    handleSubmit,  
    formState: { errors, isVaild },
    watch,reset

  } = useForm({
    defaultValues: {
      name: "",
      email: "",    
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const submitHanlder = (e) => {
   console.log(e);
   const {name, email, password} = e
   mutate({name,email,password})
//    reset()   
  };

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-20">
        <div>
          <h1 className=" text-center text-3xl sm:text-5xl font-bold">
            Sign Up
          </h1>

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
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Name can only contain letters",
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
                Password
              </label>
              <input
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                })}
                placeholder="Enter Password"
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
            <div className="flex flex-col gap-2 items-start">
              <label
                className="text-semiblack  dark:text-white"
                htmlFor="cpassword"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                className={`bg-transparent ${errors.confirmPassword?.message ? "border-red-500":""} dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md`}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              {errors.confirmPassword?.message && (
                <p className="text-red-500 text-md">
                  {errors.confirmPassword?.message}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2 items-start w-[300px] sm:w-[400px]">
              <p className="capitalize text-secondary hover:underline cursor-pointer font-bold">
                forget password
              </p>
              <button
                type="submit"
                className={`bg-primary w-full p-5 text-white rounded-lg my-4 ${isPending ? `cursor-not-allowed`:null}`}
                disabled= {isPending}
              >
                Register
              </button>
              <p>
                you have an account?{" "}
                <a
                  href="#"
                  className="text-secondary underline cursor-pointer font-bold"
                >
                  login now
                </a>
              </p>
            </div>
          </form>
        </div>
      </section>
    </MainLayout>
  );
};

export default Register;
