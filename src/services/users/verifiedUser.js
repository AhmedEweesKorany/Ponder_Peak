import axios from "axios";

const verifiedUser = async ({ id,token }) => {
    try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get(`/api/users/makeVreified/${id}`, config);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message)
          throw new Error(error.response.data.message);
        throw new Error(error.message);
      }
};

export default verifiedUser;
