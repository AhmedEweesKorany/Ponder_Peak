import axios from "axios";


const updateProfile =async ({token,userData})=>{
   try {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
   const {data} =   await axios.put("/api/users/updateProfile",userData,config)
    return data;
   } catch (error) {
    if(error.response && error.response.data.message) throw new Error(error.response.data.message)

        throw new Error(error.message)
   }
}

export default updateProfile;