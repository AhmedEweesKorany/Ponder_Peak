import axios from "axios";

 const createPost = async ({ token ,postData}) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.post(`/api/posts/create`, postData, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };

  export default createPost;