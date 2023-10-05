import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import * as postActions from "../../store/actions/postActions"
import CreatePost from "../../components/postList/CreatePost"
import PostItem from "../../components/postList/PostItem"



export default function PostBrowser() {

  const dispatch = useDispatch()
  const posts = useSelector((state) => state.postReducer.posts)

  const navigate = useNavigate()

  function removePost(id) {
    dispatch(postActions.removePostAction(id))
  }

  function updatePost(id) {
    navigate(`postlist/edit/${id}`)
  }


  return (
    <div className="container card bg-primary bg-gradient">
            <div className="text-center pt-3">
                <h1 className="text-black">Recently Published</h1>
                <CreatePost/>
            </div>
            {
                posts.map((post, index) => {
                    return <PostItem key={post.id} data={post} remove={removePost} update={updatePost} />
                })
            }
        </div>
  )
}
