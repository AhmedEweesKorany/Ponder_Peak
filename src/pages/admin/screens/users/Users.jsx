import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { images, LoadingAnimation } from "../../../../constants";
import axios from "axios";
import { useSelector } from "react-redux";
import { deleteUser, getAllUsers, makeAdmin, verifiedUser } from "../../../../services/users";

const Users = () => {
  const queryClient = useQueryClient();

  const userData = useSelector(state => state.user);
const {
    mutate: deleteDataHandler,
    isLoading: isLoadingDeleteData,
  } = useMutation({
    mutationFn: ({ id, token }) => {
      return deleteUser({ id, token });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  // make user verified 
  const {mutate:verifiedHandler,isLoading:verifiedIsLoading} = useMutation({
    mutationFn:({id,token})=>{
      return verifiedUser({id,token})
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error)}
  })


  // make user admin 
  const {mutate:adminHandler,isLoading:adminIsloading} = useMutation({
    mutationFn:({id,token})=>{
      return makeAdmin({id,token})
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["users"]);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error)}
  })


  const {
    data:usersData,isLoading,error
  } = useQuery({
    queryFn:()=>{
      return getAllUsers({token:userData?.userInfo?.token})
    },
    queryKey:["users"]
  })

console.log(usersData)

  return (
   
    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 overflow-hidden">
    <h1 className="text-2xl font-semibold my-5">Manage Users</h1>
    <h2 className="text-2xl leading-tight my-5 mx-2">Users</h2>
    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
      <table className="min-w-full leading-normal overflow-hidden">
        <thead>
          <tr>
            {["user","email","created at","vrefied","admin","actions"].map((title, index) => (
              <th
                key={index}
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            { isLoading ? <LoadingAnimation/> : usersData?.length > 0 ? usersData?.map((user,i)=>{
             return    <>
               
   <tr key={i}>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <div className="flex items-center">
       <div className="flex-shrink-0">
         <a href="/" className="relative block">
           <img
             src={
               user?.avatar
                 ? axios.defaults.baseURL + "/uploads/" + user?.avatar
                 : images.userImage
             }
             alt={user?.name}
             className="mx-auto object-cover rounded-lg w-10 aspect-square"
           />
         </a>
       </div>
       <div className="ml-3">
         <p className="text-gray-900 whitespace-no-wrap">
           {user?.name}
         </p>
       </div>
     </div>
   </td>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
   
     <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
   </td>


   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <p className="text-gray-900 whitespace-no-wrap">
       {new Date(user?.createdAt).toLocaleDateString("en-US", {
         day: "2-digit",
         month: "2-digit",
         year: "2-digit",
         hour: "numeric",
         minute: "numeric",
       })}
     </p>
   </td>



   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <p className="text-gray-900 whitespace-no-wrap">
       {user?.verified ? "Yes" : "No"}
     </p>
   </td>


   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <p className="text-gray-900 whitespace-no-wrap">
       {user?.admin ? "Yes" : "No"}
     </p>
   </td>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
     <button
       disabled={isLoadingDeleteData}
       type="button"
       className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
       onClick={() => {
         deleteDataHandler({
           id: user?._id,
           token: userData.userInfo.token,
         });
       }}
     >
       Delete
     </button>
     <button
       disabled={verifiedIsLoading}
       type="button"
       className="text-blue-600 hover:text-blue-900 disabled:opacity-70 disabled:cursor-not-allowed"
       onClick={() => {
         verifiedHandler({
           id: user?._id,
           token: userData?.userInfo?.token,
         });
       }}
     >
       verified
     </button>
     <button
       disabled={adminIsloading}
       type="button"
       className="text-green-600 hover:text-green-900 disabled:opacity-70 disabled:cursor-not-allowed"
       onClick={() => {
        adminHandler({
           id: user?._id,
           token: userData?.userInfo?.token,
         });
       }}
     >
       admin
     </button>
   </td>
   </tr>
    </> }) : <h1 className="text-4xl font-bold text-center">No Users Found</h1>}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default Users;

