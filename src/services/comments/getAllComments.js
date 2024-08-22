import axios from "axios";

const getAllComments = async ({token}) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

        const { data } = await axios.get(`/api/comments/all`,config);
        return data.comments;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default getAllComments;