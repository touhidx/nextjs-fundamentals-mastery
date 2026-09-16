// import React from "react";
interface Iprop {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  createdAt: string;
}
interface Iprops {
  post: Iprop;
}
const Post = ({ post }: Iprops) => {
  const { title } = post;
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
