import axios from "axios";
import React, { useEffect, useState } from "react";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [commentsCount, setCommentsCount] = useState(0);

  const handleComment = async (e) => {
    if (e.key === "Enter") {
      const newComment = e.target.value.trim();
      if (!newComment) return;

      try {
        axios.defaults.withCredentials = true;
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/comments/${videoId}`,
          {
            content: newComment,
          }
        );
        setCommentsCount((prev) => prev + 1);

        e.target.value = "";
      } catch (error) {
        console.error("Error posting comment:", error);
        alert("Failed to post the comment. Please try again.");
      }
    }
  };

  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/v1/get-all-comments/${videoId}`
        );

        setComments(res.data.data.comments || []);
        setCommentsCount(res.data.data.commentsCount || 0);
      } catch (error) {
        console.error("Error fetching comments:", error);
        alert("Failed to load comments. Please try again.");
      }
    };

    fetchAllComments();
  }, [comments.length, videoId, commentsCount]);

  return (
    <div className="items-center mt-2 px-2 justify-center border-2 pb-2 text-white">
      <h4 className="mb-2 text-lg font-bold">All Comments ({commentsCount || 0})</h4>
      <input
        onKeyDown={handleComment}
        className="w-full h-8 px-2 mt-1 bg-gray-800 outline-none border-2 border-white placeholder-white text-white"
        type="text"
        placeholder="Add a comment..."
      />

      <div className="mt-4 overflow-y-auto max-h-60">
        {comments.length > 0 &&  comments ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="mb-2 p-2 bg-gray-900 rounded flex text-sm border border-gray-700"
            >
              <img className="h-10 w-10" src={comment?.users[0]?.avatar} />
              <div>
                <p className="font-semibold text-blue-400">
                  {comment?.users?.[0]?.username || "Anonymous"}
                </p>
                <p>{comment?.content}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            No comments yet. Be the first to comment!
          </p>
        )}
      </div>
    </div>
  );
};

export default Comments;
