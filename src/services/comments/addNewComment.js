import axios from "axios";

const addNewComment = async ({ content,postId ,token }) => {
    try {
      
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const { data } = await axios.post(`/api/comments/create`,{
            content,postId
        },config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default addNewComment;
