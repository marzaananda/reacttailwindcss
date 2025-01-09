import React, { useState } from "react";
import CommentHp from "../components/CommentHp";


const PostPage: React.FC = () => {
  const [isCommentOpen, setCommentOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setCommentOpen(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open Comments
      </button>

      {isCommentOpen && (
        <CommentHp isOpen={isCommentOpen} onClose={() => setCommentOpen(false)} />
      )}
    </div>
  );
};

export default PostPage;
