import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const handleComment = (e) => {
    if (e.key == "Enter") {
      const newComments = e.target.value;
      setComments((prevcomments) => [...prevcomments, newComments]);
      e.target.value = "";
    }
  };
  return (
    <div className="w-full items-center mt-2 px-2 justify-center border-2 pb-2 text-white ">
      <h4>All Comments</h4>
      <input
        onKeyDown={(e) => {
          handleComment(e);
        }}
        className="w-full h-8 px-2 mt-1 bg-gray-800 outline-white border-2 border-white placeholder-white"
        type="text"
        placeholder="Add comments.."
      />
      {comments.map((cmt) => (
        <div className="overflow-scroll">
          <p>{cmt}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
