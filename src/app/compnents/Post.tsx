// import React from "react";

import PostProps from "@/type";
import Link from "next/link";

interface PostComponentProps {
  blog: PostProps;
}

const Post = ({ blog }: PostComponentProps) => {
  // console.log(post);
  const { id, title } = blog;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h1>{id}</h1>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts.
        </p>
        <div className="card-actions justify-end">
          <Link href={`/blogs/${id}`}>
            <button className="btn btn-primary">show details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
