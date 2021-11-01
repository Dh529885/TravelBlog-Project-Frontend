import { useEffect, useState } from "react"
import { Route, Switch } from "react-router-dom"
import Index from "../pages/Index"
import Show from "../pages/Show"

function Main(props) {
  const [ blog, setBlog ] = useState(null);

  const URL = "https://mytravelblog-backend.herokuapp.com/blog/";

  const getBlog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setBlog(data);
  }

  const createBlog = async post => {
    // make post request to create blog
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(post),
    });
    // update list of blog
    getBlog();
  }

  const updateBlog = async (post, id) => {
    // make put request to create blog
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(post),
    });
    // update list of blog
    getBlog();
  }

  const deleteBlog = async id => {
    // make delete request to create blog
    await fetch(URL + id, {
      method: "DELETE",
    })
    // update list of blog
    getBlog();
  }

  useEffect(() => getBlog(), []);

  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Index blog={blog} createBlog={createBlog} />
        </Route>
        <Route
          path="/blog/:id"
          render={rp => (
            <Show
              blog={blog}
              updateBlog={updateBlog}
              deleteBlog={deleteBlog}
              {...rp}
            />
          )}
        />
      </Switch>
    </main>
  );
}

export default Main;
