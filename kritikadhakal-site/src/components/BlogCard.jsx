function BlogCard({ post }) {
    return (
      <div className="blog-card">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        <a href={post.link} target="_blank" rel="noopener noreferrer">Read More</a>
      </div>
    );
  }
  
  export default BlogCard;
  