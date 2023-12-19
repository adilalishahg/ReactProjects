import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Layout from "./Layout.jsx";
import Contact from "./components/ContactUs/ContactUs.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       { path: "/about", element: <About /> },
//       { path: "/contactus", element: <ContactUs /> },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createBrowserRouter(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
