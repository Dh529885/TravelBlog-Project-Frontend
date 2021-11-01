import { useState } from "react";
function Show(props) {
  const id = props.match.params.id;
  const blog = props.blog;
  const post = blog.find(p => p._id === id);

  const [ editForm, setEditForm ] = useState(post);

  // handleChange function for form
  const handleChange = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmit = event => {
    event.preventDefault();
    props.updateBlog(editForm);
    props.history.push("/");
  }

  const removePost = () => {
    props.deleteBlog(post._id);
    props.history.push("/");
  }

  return (
    <div className="post">
      
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.name} />
      <p>{post.desc}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.desc}
          name="desc"
          placeholder="desc"
          onChange={handleChange}
        />
        <input type="submit" value="Update Post" />
        <button id="delete" onClick={removePost}>
        DELETE
      </button>
      </form>
    </div>
  )
}

export default Show;