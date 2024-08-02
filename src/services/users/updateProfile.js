import axios from "axios";


const updateProfile =async ({name,email,oldPassword,id,newPassword})=>{
   try {
   const {data} =   await axios.put("/api/users/updateProfile",{
        name,
        email,
        id,
        oldPassword,
        newPassword
    })
    return data;
   } catch (error) {
    if(error.response && error.response.data.message) throw new Error(error.response.data.message)

        throw new Error(error.message)
   }
}

export default updateProfile;