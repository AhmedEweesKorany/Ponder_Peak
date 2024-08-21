import axios from "axios";

const getPostBySlug = async ({ slug }) => {
    try {
      

        const { data } = await axios.get(`/api/posts/${slug}`);
        return data.post;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default getPostBySlug;
