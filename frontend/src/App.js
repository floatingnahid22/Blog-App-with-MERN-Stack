import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./components/AddBlog";
import Auth from "./components/Auth";
import BlogDetail from "./components/BlogDetail";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import UserBlogs from "./components/UserBlogs";

function App() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/add" element={<AddBlog />} />
          <Route path="/myblogs" element={<UserBlogs />} />
          <Route path="/myblogs/:id" element={<BlogDetail />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
