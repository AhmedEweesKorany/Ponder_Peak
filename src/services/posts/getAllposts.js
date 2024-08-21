import axios from "axios";

const getAllposts = async ({ token }) => {
    try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get("/api/posts", config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default getAllposts;
