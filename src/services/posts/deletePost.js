import axios from "axios";

const deletePost = async ({ slug,token }) => {
    try {
        const config = {
          
          headers: {
                  Authorization: `Bearer ${token}`,
              }
          
        }

        const { data } = await axios.delete(`/api/posts/delete/${slug}`,config);
        return data.post;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default deletePost;
