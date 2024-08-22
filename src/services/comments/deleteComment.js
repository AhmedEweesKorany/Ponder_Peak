import axios from "axios";

const deleteComment = async ({ id ,token }) => {
    try {
      
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const { data } = await axios.delete(`/api/comments/delete/${id}`,config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default deleteComment;
