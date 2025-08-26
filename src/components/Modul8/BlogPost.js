import "./BlogPost.css";


function BlogPost({ post }) {
    return (
        <div className="blog-card">
        <h2 className="blog-title">{post.title}</h2>
        <p className="blog-date">Published: {post.date}</p>
        <p className="blog-text">{post.text}</p>
        <div className="blog-tags">
            {post.tags.map((t, index) => (
            <span key={index} className="blog-tag">#{t}</span>
            ))}
        </div>
        </div>
    );
};

export default BlogPost;
