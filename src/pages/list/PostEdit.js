import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postActions from "../../store/actions/postActions";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function PostEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const posts = useSelector((state) => state.postReducer.posts);

  const [activePost, setActivePost] = useState({});

  const postTitleInput = useRef(null);
  const postContentInput = useRef(null);
  const postImageInput = useRef(null);
  const postScoreInput = useRef(null);

  function finishEdit() {
    const editPost = {
      id: Number(id),
      postTitleInput: postTitleInput.current.value,
      content: postContentInput.current.value,
      image: postImageInput.current.value,
      score: Number(postScoreInput.current.value),
    };

    dispatch({
      type: postActions.UPDATE_POST,
      payload: editPost,
    });
    navigate("/");
  }

  useEffect(() => {
    const newPost = posts.find((post) => {
      return post.id === Number(id);
    });
    setActivePost(newPost);
  }, [id]);

  return (
    <div className="mt-3 bg-primary.bg-gradient">
      {activePost.title ? (
        <div className="container card">
          <Link to={`/`}>Back Posts</Link>
          <h4>Post ID #{id}</h4>
          <div className="form-group mt-3">
            <label htmlFor="postTitle">Title</label>
            <input
              ref={postTitleInput}
              type="text"
              className="form-control"
              id="postTitle"
              defaultValue={activePost.title}
              
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="postContent">Type you text content...</label>
            <textarea
              ref={postContentInput}
              className="form-control "
              id="postContent"
              defaultValue={activePost.content}
            />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="postScore">Score: {' '} </label>
            <input
              ref={postScoreInput}
              type="number"
              className="form-check-input px-5 py-3"
              id="postScore"
              defaultValue={activePost.score}
              onChange={(e) => setActivePost({ ...activePost, score: parseInt(e.target.value, 10) })}
            />
            
          </div>
          <div className="form-group mt-3">
            <label htmlFor="postImage">Image Content</label>
            <input
              ref={postImageInput}
              type="text"
              className="form-control"
              id="postImage"
              defaultValue={activePost.image}
            />
          </div>
          <button
            className="btn btn-primary w-25 my-4 text-right"
            onClick={() => finishEdit()}>
            Finish Edit Post
          </button>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
