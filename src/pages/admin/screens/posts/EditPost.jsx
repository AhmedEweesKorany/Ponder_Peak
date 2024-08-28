import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";
import { getPostBySlug, updatePost } from "../../../../services/posts";
import {  useParams, useNavigate } from "react-router-dom";
import ArticleDetailSkeleton from "../../../ArticlePage/components/ArticleDetailSkeleton";
import ErrorMessage from "../../../../components/ErrorMessage.jsx";
import { stables } from "../../../../constants";
import { HiOutlineCamera } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

const EditPost = () => {
  const { slug } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [postSlug, setPostSlug] = useState(slug);
  const userState = useSelector((state) => state.user);
  const [initialavatar, setInitialavatar] = useState(null);

  const [curData,setCurData] = useState({
    avatar:null,
    body:null,
    title:null,
    caption:null,
    
    tags:null
  })


  const { data, isLoading, isError } = useQuery({
    queryFn: () => getPostBySlug({ slug }),
    queryKey: ["blog"],
    // refetchOnWindowFocus: false,
  });
  if(curData) console.log(curData)
  const {
    mutate: mutateUpdatePostDetail,
    isLoading: isLoadingUpdatePostDetail,
  } = useMutation({
    mutationFn: ({ updatedData, slug, token }) => {
      return updatePost({
        updatedData,
        slug,
        token,
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["blog", slug]);
      toast.success("Post is updated");
      navigate(`/dashboard/posts/manage`);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurData({...curData,avatar:file})
  };

  const handleUpdatePost = async () => {
    let updatedData = new FormData();

    if (!initialavatar && curData.avatar) {
      updatedData.append("postImage", curData.avatar);
    } else if (initialavatar && !curData.avatar) {
      const urlToObject = async (url) => {
        let reponse = await fetch(url);
        let blob = await reponse.blob();
        const file = new File([blob], initialavatar, { type: blob.type });
        return file;
      };
      const picture = await urlToObject(
        stables.UPLOAD_FOLDER_BASE_URL + data?.avatar
      );

      updatedData.append("postImage", picture);
    }

    const curTextOnly = curData
    delete curTextOnly.avatar
    updatedData.append(
      "document",
      JSON.stringify({  slug: postSlug, ...curTextOnly })
    );

    mutateUpdatePostDetail({
      updatedData,
      slug,
      token: userState.userInfo.token,
    });
  };

  const handleDeleteImage = () => {
    if (window.confirm("Do you want to delete your Post picture?")) {
      data.avatar = null;
      setInitialavatar(null);
      setCurData({
        ...curData,
        avatar: null,
      });
    }
  };

  let isPostDataLoaded = !isLoading && !isError;

  return (
    <div>
      {isLoading ? (
        <ArticleDetailSkeleton />
      ) : isError ? (
        <ErrorMessage message="Couldn't fetch the post detail" />
      ) : (
        <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
          <article className="flex-1">
            <label htmlFor="postImage" className="w-full cursor-pointer">
              {curData.avatar ? (
                <img
                  src={URL.createObjectURL(curData?.avatar)}
                  alt="uploaded img"
                  className="rounded-xl w-full"
                />
              ) : data?.avatar ? (
                <img
                  src={stables.UPLOAD_FOLDER_BASE_URL + data?.avatar}
                  alt="initaphot "
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
                defaultValue={data?.title}
                className="d-input d-input-bordered w-full p-2 border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setCurData({...curData,title:e.target.value})}
                placeholder="title"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="caption">
                <span className="d-label-text">caption</span>
              </label>
              <input
                id="caption"
                defaultValue={data?.caption}
                className="d-input d-input-bordered w-full p-2 border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) => setCurData({...curData,caption:e.target.value})}
                placeholder="caption"
              />
            </div>
            <div className="d-form-control w-full">
              <label className="d-label" htmlFor="slug">
                <span className="d-label-text">slug</span>
              </label>
              <input
                id="slug"
                value={postSlug}
                className="d-input d-input-bordered w-full p-2 border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-dark-hard"
                onChange={(e) =>
                  setPostSlug(e.target.value.replace(/\s+/g, "-").toLowerCase())
                }
                placeholder="post slug"
              />  
            </div>
          
            <div className="mb-5 mt-2">
              <label className="d-label">
                <span className="d-label-text">tags</span>
              </label>
              {isPostDataLoaded && (
                <CreatableSelect
                  defaultValue={data.tags.map((tag) => ({
                    value: tag,
                    label: tag,
                  }))}
                  isMulti
                  onChange={(newValue) =>
                    setCurData({...curData,tags:newValue.map((item) => item.value)})
                  }
                  className="relative z-20"
                />
              )}
            </div>
            <div className="w-full ">
              {isPostDataLoaded && (
                <textarea
                  defaultValue={data?.body}
                  cols={150}
                  rows={150}
                  onChange={(data) => {
                    setCurData({...curData,body:data.target.value});
                  }}

                  className="d-input h-[200px] d-input-bordered border-slate-300 !outline-slate-300 text-xl font-medium font-roboto text-semiblack w-full"
                >

                </textarea>
              )}
            </div>
            <button
              disabled={isLoadingUpdatePostDetail}
              type="button"
              onClick={handleUpdatePost}
              className="w-full bg-green-500 text-white font-semibold rounded-lg px-4 py-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Update Post
            </button>
          </article>
        </section>
      )}
    </div>
  );
};

export default EditPost;