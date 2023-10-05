import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as postActions from "../../store/actions/postActions";

export default function CreatePost() {
  // Obtener la función 'dispatch' del store de Redux
  const dispatch = useDispatch();

  // Obtener estado 'posts' del store de Redux
  const posts = useSelector((state) => state.postReducer.posts);

  // Crea una referencia al elemento de entrada de texto
  const postInput = useRef(null);

  // Función para crear un nuevo post
  function createPost() {
    // Obtener el valor del campo de entrada de texto
    const postName = postInput.current.value;

    // Crea un nuevo objeto de post
    const newPost = {
      id: posts.length, // Usa la longitud actual de la lista de posts como id
      title: postName,
      content: "Now, you can create a new post",
      image: "Add image",
      score: 0,
    };

    // Agregar el nuevo post al store de Redux
    dispatch({
      type: postActions.ADD_POST, // Tipo de acción para agregar un post
      payload: newPost, // Datos del nuevo post
    });
  }

  return (
    <div className="container d-flex flex-row align-items-center">
      
      <input
        ref={postInput}
        type="text"
        className="rounded-pill py-1 px-5 text-gray-700 placeholder-gray-400"
        placeholder="Insert post title and click "
      />

      {/* Botón para crear nuevo post */}
      <button onClick={() => createPost()} className="bg-success text-white font-bold py-1 px-2 rounded">
        Create Post
      </button>
    </div>
  );
}
