import React, { useState } from 'react'
import Cropper from 'react-easy-crop'
import getCroppedImg from './cropImage'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { setUserInfo } from '../../store/reducers/userReducer'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { updateProfilePicture } from '../../services/users'

export default function CropEasy({photo,setOpenCrop,openCrop}) {
  const [crop,setCrop] = useState({x:0,y:0})
  const [zoom,setZoom] = useState(1)
  const dispatch = useDispatch()
  const queryClient = useQueryClient()
  const userData = useSelector(state=>state.user)
const [croppedAreaPixels,setCroppedAreaPixels] = useState(null)

  const handleCropComplete = (cropedArea,cropedAreaPixels)=>{
        setCroppedAreaPixels(cropedAreaPixels)
  }


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
setOpenCrop(!openCrop)
// Redux Update
dispatch(setUserInfo(JSON.parse(localStorage.getItem("account"))));

        toast.success(data.message)
    },
    onError: error=> {
      console.log(error)
        toast.error(error.message)
    }
})


  const handleImgCrop = async ()=>{
    try {
        const croppedImage = await getCroppedImg(photo?.url,croppedAreaPixels);
        if (!croppedImage) {
            throw new Error("croppedImage is null or undefined");
        }
    
        const file = new File([croppedImage], `${photo?.file?.name}`, { type: photo?.file?.type });
        const formData = new FormData();
        formData.append("profilePicture", photo?.file);
     
    
        mutate({ token: userData.userInfo.token, formData });
    } catch (error) {
        console.error("Error:", error);
    }
    

  }
    return (
    <div className='fixed z-[1000] inset-0 flex justify-center p-5 overflow-auto bg-black/50'>
        <div className='bg-white dark:bg-gray-800  h-fit w-full sm:max-w-[350px] p-5 rounded-lg'>
            <h2 className='text-semiblack font-semibold dark:text-white mb-2'>Crop Image</h2>
            <div className='relative w-full aspect-square rounded-lg overflow-hidden'>
            <Cropper image={photo?.url} crop={crop} zoom={zoom }  onCropChange={setCrop} onZoomChange={setZoom} onCropComplete={handleCropComplete} />
            </div>
            <div>
                <label htmlFor="zoomRange" className='block mt-2 mb-0.5 text-sm font-medium text-gray-900 dark:text-white'>zoom: {`${Math.round(zoom*100)}%`}</label>
                <input type="range" id="zoomRange" min={1} max={3} step={0.1} value={zoom} onChange={(e)=>setZoom(e.target.value)} className='w-full h-2 bg-gray-200  rounded-lg appearance-none cursor-pointer dark:bg-gray-700'/>
            </div>
            <div className='flex justify-between gap-2 flex-wrap my-4'>
            <button className='px-3 py-1.5 bg-yellow-500 text-white rounded-md' onClick={()=>{
                setCrop({x:0,y:0})
                setZoom(1)
            }}>Reset</button>
                <button className='px-3 py-1.5 bg-green-500 text-white rounded-md' onClick={handleImgCrop}>Upload</button>
                <button className='px-3 py-1.5 bg-red-500 text-white rounded-md' onClick={()=>setOpenCrop(!openCrop)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}
