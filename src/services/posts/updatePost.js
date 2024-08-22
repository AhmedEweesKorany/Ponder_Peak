import axios from "axios";

 const updatePost = async ({ updatedData, slug, token }) => {
    try {
      const config = {
        headers: {
            "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
  
      const { data } = await axios.put(`/api/posts/update/${slug}`,updatedData, config);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message)
        throw new Error(error.response.data.message);
      throw new Error(error.message);
    }
  };

  export default updatePost;