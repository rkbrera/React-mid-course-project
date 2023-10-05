import React from "react";

 const PostItem = (props) => {
  const { id, title, content, image, score } = props.data;
  const { remove, update } = props;

  return (
      <div className="container card m-2 py-1 px-2 d-flex flex-row ">
          <div className="col-2">
              <img src={image} alt={title} style={{width: "100%", borderRadius:"10px"}} />
          </div>
          <div className="col-9">
              <h2>{title}</h2>
              <h4>Score:{score}</h4>
              <p>{content}</p>
          </div>
          <div className="col-1 d-flex flex-column justify-content-between">
              <button className="btn btn-danger p-1" onClick={() => {remove(id)}}>Delete</button>
              <button className="btn btn-success p-1" onClick={() => {update(id)}}>Edit Post</button>
          </div>
      </div>
  );
};

export default PostItem
