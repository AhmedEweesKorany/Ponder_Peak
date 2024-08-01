import axios from "axios"

 const login = async ({name,email,password})=>{
    try {
        const {data} = await axios.post("/api/users/login",{
            
            email,
            password
        })

        return data;
    } catch (error) {
        if(error.response && error.response.data.message) throw new Error(error.response.data.message)

            throw new Error(error.message)
    }
}

export default login;