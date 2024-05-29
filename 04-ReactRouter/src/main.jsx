import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Layout from "./Layout.jsx";
<<<<<<< HEAD
import Contact from "./components/ContactUs/ContactUs.jsx";
import User from "./components/User/User.jsx";
=======
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
>>>>>>> e38ca3c9fe13e9e938bbc379d2d70e2aa801639e

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
//       { path: "/user/:userid", element: <User /> },
//     ],
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
<<<<<<< HEAD
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
=======
      <Route path="contactus" element={<ContactUs />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
>>>>>>> e38ca3c9fe13e9e938bbc379d2d70e2aa801639e
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
