const fs = require('fs');
const path = require('path');
const blogsFile = path.join(__dirname, '../data/blogs.json');

function readBlogs() {
  if (!fs.existsSync(blogsFile)) return [];
  return JSON.parse(fs.readFileSync(blogsFile, 'utf-8'));
}
function writeBlogs(data) {
  fs.writeFileSync(blogsFile, JSON.stringify(data, null, 2));
}

exports.getAllBlogs = (req, res) => {
  const blogs = readBlogs();
  res.json(blogs);
};

exports.getBlogById = (req, res) => {
  const blogs = readBlogs();
  const blog = blogs.find(b => b.id == req.params.id);
  if (!blog) return res.status(404).json({ message: 'Not found' });
  res.json(blog);
};

exports.createBlog = (req, res) => {
  const blogs = readBlogs();
  const { title, excerpt, content, date, author, category, tags } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const newBlog = {
    id: Date.now(),
    title,
    excerpt,
    content,
    date: date || new Date().toISOString(),
    image,
    author,
    category,
    tags: tags ? tags.split(',').map(t => t.trim()) : [],
  };
  blogs.unshift(newBlog);
  writeBlogs(blogs);
  res.status(201).json(newBlog);
};

exports.updateBlog = (req, res) => {
  const blogs = readBlogs();
  const idx = blogs.findIndex(b => b.id == req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  const { title, excerpt, content, date, author, category, tags } = req.body;
  if (req.file) blogs[idx].image = `/uploads/${req.file.filename}`;
  if (title) blogs[idx].title = title;
  if (excerpt) blogs[idx].excerpt = excerpt;
  if (content) blogs[idx].content = content;
  if (date) blogs[idx].date = date;
  if (author) blogs[idx].author = author;
  if (category) blogs[idx].category = category;
  if (tags) blogs[idx].tags = tags.split(',').map(t => t.trim());
  writeBlogs(blogs);
  res.json(blogs[idx]);
};

exports.deleteBlog = (req, res) => {
  const blogs = readBlogs();
  const idx = blogs.findIndex(b => b.id == req.params.id);
  if (idx === -1) return res.status(404).json({ message: 'Not found' });
  blogs.splice(idx, 1);
  writeBlogs(blogs);
  res.json({ message: 'Deleted' });
};
