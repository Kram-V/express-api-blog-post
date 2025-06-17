import express from "express";
import {
  getblogPosts,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} from "../controller/blogPostController.js";

const route = express.Router();

route.get("/blog-posts", getblogPosts);
route.post("/blog-posts", createBlogPost);
route.put("/blog-posts/:id", updateBlogPost);
route.delete("/blog-posts/:id", deleteBlogPost);

export default route;
