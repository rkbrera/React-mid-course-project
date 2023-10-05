import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../pages/layouts/MainLayout";
import PostList from "../../pages/list/PostList";
import PostEdit from "../../pages/list/PostEdit";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PostList />} />
        </Route>
        <Route path="/postlist/edit" element={<MainLayout />}>
          <Route path=":id" element={<PostEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
