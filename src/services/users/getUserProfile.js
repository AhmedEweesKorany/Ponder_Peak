import axios from "axios";

const getUserProfile = async ({ token }) => {
  try {
    const { data } = await axios.get("/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (error) {
    if (error.response && error.response.data.message)
      throw new Error(error.response.data.message);

    throw new Error(error.message);
  }
};

export default getUserProfile;
