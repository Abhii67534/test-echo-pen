import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Signin } from "./pages/Signin";
// import { Blog } from "./pages/Blog";
// import { BlogPost } from "./pages/BlogPost";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import "./index.css";

// Refactored App component using BrowserRouter, Routes, and Route
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/signin" element={<Signin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-post" element={<BlogPost />} /> */}
      </Routes>
    </Router>
  );
}
