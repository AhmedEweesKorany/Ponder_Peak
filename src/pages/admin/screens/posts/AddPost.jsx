import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { createPost } from "../../../../services/posts";
import { useNavigate } from "react-router-dom";

import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const AddNewPost = () => {
  const navigate = useNavigate();
  const userState = useSelector((state) => state.user);

  const [curData, setCurData] = useState({
    avatar: null,
    body: null,
    title: null,
    caption: null,
    tags: null,
  });

  if (curData) console.log(curData);
  const { mutate: mutateCreateNewPost, isLoading: isLoadingCreateNewPost } =
    useMutation({
      mutationFn: ({postData}) => {
        return createPost({
          token: userState.userInfo.token,
          postData,
        });
      },
      onSuccess: (data) => {
        toast.success(data.message);
        navigate(`/dashboard/posts/manage`);
    },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurData({ ...curData, avatar: file });
  };

  const handleAddPost = async () => {
    let postData = new FormData();

    if (curData.avatar) {
      postData.append("postImage", curData.avatar);
    }
    const curTextOnly = curData;
    delete curTextOnly.avatar;
    postData.append("document", JSON.stringify({ ...curTextOnly }));

    mutateCreateNewPost({postData});
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Post picture?")) {
      setCurData({
        ...curData,
        avatar: null,
      });
    }
  };

  return (
    <div>
      
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
        <article className="flex-1">
          <label htmlFor="postImage" className="w-full cursor-pointer">
            {curData.avatar ? (
              <img
                src={URL.createObjectURL(curData?.avatar)}
                alt="uploaded img"
                className="rounded-xl w-full"
              />
            ) : (
              <div className="w-full min-h-[200px] bg-blue-50/50 flex justify-center items-center">
                <HiOutlineCamera className="w-7 h-auto text-primary" />
              </div>
            )}
          </label>
          <input
            type="file"
            className="sr-only"
            id="postImage"
            onChange={handleFileChange}
          />
          <button
            type="button"
            onClick={handleDeleteImage}
            className="w-fit bg-red-500 text-sm text-white font-semibold rounded-lg px-2 py-1 mt-5"
          >
            Delete Image
          </button>

          <div className="d-form-control w-full">
            <label className="d-label" htmlFor="title">
              <span className="d-label-text">Title</span>
            </label>
            <input
              id="title"
              className="d-input d-input-bordered w-full p-2 border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
              onChange={(e) =>
                setCurData({ ...curData, title: e.target.value })
              }
              placeholder="title"
            />
          </div>
          <div className="d-form-control">
            <label className="d-label" htmlFor="caption">
              <span className="d-label-text">caption</span>
            </label>
            <input
              id="caption"
              className="d-input d-input-bordered w-full p-2 border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
              onChange={(e) =>
                setCurData({ ...curData, caption: e.target.value })
              }
              placeholder="aa"
            />
          </div>

          <div className="mb-5 mt-2">
            <label className="d-label">
              <span className="d-label-text">tags</span>
            </label>
            <CreatableSelect
              isMulti
              onChange={(newValue) =>
                setCurData({
                  ...curData,
                  tags: newValue.map((item) => item.value),
                })
              }
              className="relative z-20"
            />
            
          </div>
          <div className="w-full ">
            <textarea
              onChange={(data) => {
                setCurData({ ...curData, body: data.target.value });
              }}
              placeholder="Write your post here..."
              className="d-input  d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-semiblack w-full"
            ></textarea>
          </div>
          <button
            disabled={isLoadingCreateNewPost}
            type="button"
            onClick={handleAddPost}
            className="w-full bg-primary text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
          >
            Create Post
          </button>
        </article>
      </section>
      
    </div>
  );
};

export default AddNewPost;
