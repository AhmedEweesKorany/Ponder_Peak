import axios from "axios";

const updateComment = async ({ id ,token,content }) => {
    try {
      
        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };

        const { data } = await axios.put(`/api/comments/update/${id}`,{content},config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default updateComment;
