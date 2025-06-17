import BlogPost from "../model/blogPostModel.js";

export const getblogPosts = async (req, res) => {
  try {
    const search = req.query.search || "";
    const blogPosts = await BlogPost.find({
      title: { $regex: search, $options: "i" },
    });

    res.status(200).json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createBlogPost = async (req, res) => {
  try {
    const blogPostData = new BlogPost(req.body);

    const savedData = await blogPostData.save();

    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateBlogPost = async (req, res) => {
  try {
    const id = req.params.id;

    const updatedBlogPost = await BlogPost.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    res.status(201).json(updatedBlogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteBlogPost = async (req, res) => {
  try {
    const id = req.params.id;

    const deletedBlogPost = await BlogPost.findByIdAndDelete(id);

    res.status(200).json(deletedBlogPost);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
