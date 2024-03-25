import React from "react";

const Comments = () => {
  return (
    <div className="w-full items-center mt-2 px-2 justify-center border-2 pb-2 text-white ">
      <h4>All Comments</h4>
      <input
        className="w-full h-8 px-2 mt-1 bg-gray-800 outline-white border-2 border-white placeholder-white"
        type="text"
        placeholder="Add comments.."
      />
    </div>
  );
};

export default Comments;
