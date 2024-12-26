// src/pages/Post/PostModal.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

interface PostData {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

const PostModal: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<PostData | null>(null);

  useEffect(() => {
    // Contoh fetch data berdasarkan postId
    fetch(`https://api.example.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [postId]);

  if (!post) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
          )}
          <p className="text-gray-700">{post.content}</p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default PostModal;
