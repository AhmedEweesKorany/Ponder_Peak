import axios from "axios";


const updateProfilePicture =async ({token,userData})=>{
   try {
    const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },k
      };
   const {data} =   await axios.put("/api/users/updateProfilePicture",userData,config)
    return data;
   } catch (error) {
    if(error.response && error.response.data.message) throw new Error(error.response.data.message)

        throw new Error(error.message)
   }
}

export default updateProfilePicture;