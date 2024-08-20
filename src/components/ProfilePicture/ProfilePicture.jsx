import React, { useState } from 'react'
import { HiOutlineCamera } from 'react-icons/hi'
import { createPortal } from 'react-dom'
import axios from 'axios'
import CropEasy from '../Crop/CropEasy'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateProfilePicture } from '../../services/users'
import { setUserInfo } from '../../store/reducers/userReducer'
import toast from 'react-hot-toast'
const ProfilePicture = ({avatar}) => {

    const [openCrop ,setOpenCrop] = useState(false)
    const queryClient = useQueryClient()
    const dispatch = useDispatch()
    const userData = useSelector(state=>state.user)
    const [photo,setPhoto] = useState(null)
    console.log( axios.defaults.baseURL + "/uploads/" + avatar)

    const handleFileChange = (e) => {
        setOpenCrop(!openCrop)
        const file = e.target.files[0];
        setPhoto({url:URL.createObjectURL(file),file})
      };

      // mutate to delete profile picture 
      const {mutate,isPending}=useMutation({
        mutationFn:({token,formData})=>{
            return updateProfilePicture({token,userData:formData}) // should return a promise 
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
    
    // Redux Update
    dispatch(setUserInfo(JSON.parse(localStorage.getItem("account"))));
    
            toast.success(data.message)
        },
        onError: error=> {
            toast.error(error.message)
        }
    })
    const handleDeleteProfilePicture = ()=>{
        try {
            const formData = new FormData();
            formData.append("profilePicture", {});
        
            mutate({ token: userData.userInfo.token, formData });
        } catch (error) {
            console.error("Error:", error);
        }
    }
  return (
  <>
{openCrop &&  createPortal(<CropEasy photo={photo} setOpenCrop={setOpenCrop} openCrop={openCrop}/>,document.getElementById("portal")) }
    <div className='my-10 flex items-center gap-x-4'>
        <div className='relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden'>
    <label htmlFor="profilePic" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
        { avatar ? <img src={    axios.defaults.baseURL + "/uploads/" + avatar} alt="profile picture" className='w-full h-full object-cover' />:
            <div className='w-full h-full bg-blue-50/50 flex justify-center items-center'>
                <HiOutlineCamera className='w-7 h-auto text-primary'/>
            </div>
        }
    </label>
    <input type="file" onChange={handleFileChange}  className='sr-only' id="profilePic" />
        </div>
        <button className='border border-red-500 rounded-lg px-4 py-2 text-red-500' type='button' onClick={handleDeleteProfilePicture}>Delete</button>
    </div>
  </>
  )
}

export default ProfilePicture
