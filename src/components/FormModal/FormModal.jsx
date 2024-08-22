import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { updateComment } from "../../services/comments";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const FormModal = ({comment,setUpdate}) => {
  const [modalOpen, setModalOpen] = useState(false);
    const [commentContent, setCommentContent] = useState(comment.content);

    const userData = useSelector(state=>state.user)
  const trigger = useRef(null);
  const modal = useRef(null);
    document.getElementById("commentUpdate").onclick = function() {
      setModalOpen(true);
    };
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modal.current) return;
      if (
        !modalOpen ||
        modal.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });


  // close if the esc key is pressed
  useEffect(() => {


    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  // handle update comment
  // use mutation
  const queryClient = useQueryClient()
  const {mutate,isLoading} = useMutation({
    mutationFn:()=>{
        return updateComment({id:comment._id,content:commentContent,token:userData.userInfo.token})
    },
    onSuccess:data=>{
        toast.success(data.message)
        queryClient.invalidateQueries(["comment"])
    setModalOpen(false)
    },
    onError:data=>{
        toast.error(data.message)
    }
  })
  const handleUpdateComment = (e)=>{
    e ? e.preventDefault() : null
    mutate()
  }
  return (
    <>
      
        <div
          className={`fixed left-0 top-0 flex h-full min-h-screen z-[999] w-full items-center justify-center bg-dark/90 px-4 py-5 ${
            modalOpen ? "block" : "hidden"
          }`}
        >
          <div
            ref={modal}
            onFocus={() => setModalOpen(true)}
            onBlur={() => setModalOpen(false)}
            className="w-full max-w-[570px] rounded-[20px] bg-gray-100 shadow-2xl dark:shadow-primary/20 dark:bg-gray-800  px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
          >
            <h3 className="pb-[18px] text-xl font-semibold text-dark dark:text-white sm:text-2xl">
              Update Your Comment
            </h3>
            <span
              className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
            ></span>
            <form onSubmit={handleUpdateComment}>
                <input type="text" value={commentContent} onChange={(e)=>setCommentContent(e.target.value)}  className="border-none dark:bg-gray-700 p-4 my-5 rounded-lg outline-none" />
            <div className="-mx-3 flex flex-wrap">
              <div className="w-1/2 px-3">
                <button
                type="button"
                  onClick={() => {
                      setModalOpen(false)
                      
                    }}
                    className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
                    >
                  Cancel
                </button>
              </div>
              <div className="w-1/2 px-3">
                <button type="submit" onClick={handleUpdateComment} disabled={isLoading} className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                  Update
                </button>
              </div>
            </div>
                    </form>
          </div>
        </div>
    </>
  );
};

export default FormModal;
