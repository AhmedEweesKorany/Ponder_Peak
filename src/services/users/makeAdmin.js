import axios from "axios";

const makeAdmin = async ({ token,id }) => {
    try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.delete(`/api/users/makeAdmin/${id}`, config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default makeAdmin;
