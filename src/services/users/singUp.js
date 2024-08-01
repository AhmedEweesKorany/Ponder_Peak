import axios from "axios"

 const singUp = async ({name,email,password})=>{
    try {
        const {data} = await axios.post("/api/users/register",{
            name,
            email,
            password
        })

        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)

            throw new Error(error.message)
    }
}

export default singUp;