// import React from 'react

import Post from "../compnents/Post";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Understanding Eloquent Relationships in Laravel",
      slug: "understanding-eloquent-relationships-laravel",
      excerpt:
        "Learn how to define One-to-Many and Many-to-Many relationships cleanly in Laravel.",
      content:
        "Eloquent makes managing database relationships simple. In this post, we cover how to set up models, define relationship methods, and perform eager loading to prevent N+1 query problems...",
      category: "Laravel",
      author: "Admin",
      createdAt: "2026-09-10",
    },
    {
      id: 2,
      title: "JavaScript Promises and Async/Await Explained",
      slug: "javascript-promises-async-await-explained",
      excerpt:
        "A beginner-friendly guide to handling asynchronous code in modern JavaScript.",
      content:
        "Asynchronous JavaScript can be tricky. We break down how Promises work, how `.then()` chains work, and how `async/await` syntax makes your code much cleaner to read...",
      category: "JavaScript",
      author: "Admin",
      createdAt: "2026-09-12",
    },
    {
      id: 3,
      title: "Mastering CSS Flexbox and Grid for Responsive Layouts",
      slug: "mastering-css-flexbox-grid-responsive-layouts",
      excerpt:
        "Discover when to use Flexbox versus CSS Grid when building modern web pages.",
      content:
        "Flexbox is designed for one-dimensional layouts, while Grid excels at two-dimensional layouts. Combining both allows you to create fully responsive designs effortlessly...",
      category: "CSS",
      author: "Admin",
      createdAt: "2026-09-13",
    },
    {
      id: 4,
      title: "How to Build a RESTful API with Core PHP",
      slug: "how-to-build-restful-api-core-php",
      excerpt:
        "Step-by-step tutorial on structuring endpoints, handling JSON requests, and returning responses in raw PHP.",
      content:
        "Before reaching for a framework, building an API with Core PHP gives you a clear understanding of HTTP headers, request methods, and database connections using PDO...",
      category: "PHP",
      author: "Admin",
      createdAt: "2026-09-14",
    },
    {
      id: 5,
      title: "Clean Code Practices for Junior Developers",
      slug: "clean-code-practices-junior-developers",
      excerpt:
        "Simple habits that make your codebase easier to read, test, and maintain.",
      content:
        "Writing code that works is only half the battle. Learn how to write self-documenting code, use meaningful variable names, and keep functions small and focused...",
      category: "Web Development",
      author: "Admin",
      createdAt: "2026-09-15",
    },
  ];
  return (
    <div>
      <h1>our data</h1>
      {blogs.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </div>
  );
};

export default BlogPage;
