import { useState } from "react"
import { Link } from "react-router-dom"

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        image: "",
        desc: "",
        
    });

    // handleChange function for form
    const handleChange = event => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    // handle submit function for form
    const handleSubmit = event => {
        event.preventDefault();
        props.createBlog(newForm);
        setNewForm({
            title: "",
            image: "",
            desc: "",
        });
    }

    // loaded function
    const loaded = () => {
        return props.blog.map(post => (
            <div key={post._id} className="post">
                <Link to={`/blog/${post._id}`}>

                <h1>{post.title}</h1>
                </Link>
                <img src={post.image} alt={post.desc} />
                <p>{post.desc}</p>

            </div>
        ));
    }

    const loading = () => {
        return <h1>Loading...</h1>;
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                  <input
                    type="text"
                    value={newForm.desc}
                    name="desc"
                    placeholder="Start typing"
                    onChange={handleChange}
                />
              
                <input type="submit" value="Post" />
            </form>
            {props.blog ? loaded() : loading()}
        </section>
    );
}

export default Index;
