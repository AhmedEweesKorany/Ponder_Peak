import React, { useState } from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import useFormData from '../../hooks/useFormData'

const Register = () => {
    const  [formData, handleChange, resetForm] = useFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = (e) => {


        e.preventDefault()
    console.log("form submitted");
    resetForm();
}
  return (
    <MainLayout>

        <section className='container mx-auto px-5 py-20'>
                <div>
                    <h1 className=' text-center text-3xl sm:text-5xl font-bold'>Sign Up</h1>

                    <form action="" className='flex flex-col gap-5 w-full  items-center  my-20'>

                        <div className='flex flex-col gap-2 items-start'>
                            <label className='text-semiblack  dark:text-white' htmlFor="name">Name</label>
                            <input onChange={handleChange} value={formData.name} placeholder='Enter Name' className='bg-transparent dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent rounded-md' type="text" id='name' name='name'/>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start'>
                            <label className='text-semiblack  dark:text-white' htmlFor="email">Email</label>
                            <input value={formData.email} onChange={handleChange} placeholder='Enter Email' className='bg-transparent dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md' type="email" id='email' name='email'/>
                        </div>

                        <div className='flex flex-col gap-2 items-start'>
                            <label className='text-semiblack  dark:text-white' htmlFor="password">Password</label>
                            <input placeholder='Enter Password' value={formData.password} onChange={handleChange} className='bg-transparent dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md' type="password" id='password' name='password'/>
                        </div>     <div className='flex flex-col gap-2 items-start'>
                            <label className='text-semiblack  dark:text-white' htmlFor="cpassword">Confirm Password</label>
                            <input placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} className='bg-transparent dark:bg-gray-700 p-3 w-[300px] sm:w-[400px] border border-gray-300 dark:border-transparent  rounded-md' type="password" id='confirmPassword' name='confirmPassword'/>
                        </div>
                        
                        <div className='flex flex-col gap-2 items-start w-[300px] sm:w-[400px]'>
                            <p className='capitalize text-secondary hover:underline cursor-pointer font-bold'>forget password</p>
                            <button type='submit' className='bg-primary w-full p-5 text-white rounded-lg my-4'>Register</button>
                            <p>you have an account? <a href="#" className='text-secondary underline cursor-pointer font-bold'>login now</a></p>
                        </div>
                    </form>
                </div>
        </section>
    </MainLayout>
  )
}

export default Register