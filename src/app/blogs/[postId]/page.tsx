import PostProps from "@/type";
import React from "react";
import { blogs } from "../page";
interface PageProps {
  params: Promise<{ postId: string }>;
}

const PostDetailsPage = async ({ params }: PageProps) => {
  const { postId } = await params;
  const post = (blogs as PostProps[]).find(
    (post) => post.id === parseInt(postId),
  );
  return (
    <>
      {post && (
        <div>
          <h1>showing post id no : {postId}</h1>
          <p>showing name: {post.author}</p>
          <p>showing content :{post.content}</p>
        </div>
      )}
    </>
  );
};

export default PostDetailsPage;
