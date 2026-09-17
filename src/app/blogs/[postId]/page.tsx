import React from "react";

interface PostProps {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
}

const PostDetailsPage = async ({ params }: PostProps) => {
  const { postId } = await params;
  const post = (blogs as PostProps).find(
    (post) => post.id === parseInt(postId),
  );
  return (
    <>
      {post && (
        <div>
          <h1>showing post id no : {postId}</h1>
        </div>
      )}
    </>
  );
};

export default PostDetailsPage;
