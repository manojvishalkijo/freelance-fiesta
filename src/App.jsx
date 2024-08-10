import "./app.scss";
import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";

import React from "react";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import Orders from "./pages/orders/Orders";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
import MyGigs from "./pages/myGigs/MyGigs";
import Signin from "./components/signin/Signin";
import Signinuser from "./components/signin/Signinuser";
import Chatbot from "./components/chatbot/Chatbot"; 
import ErrorBoundary from "../ErrorBoundary";
import Gigs1 from "./pages/gigs/gigs1";
import Gigs2 from "./pages/gigs/Gigs2";
import Gigs3 from "./pages/gigs/Gigs3";
import Gigs4 from "./pages/gigs/Gigs4";
import Gigs5 from "./pages/gigs/Gigs5";
import Gigs6 from "./pages/gigs/Gigs6";
import Gigs7 from "./pages/gigs/Gigs7";
import Gigs8 from "./pages/gigs/Gigs8";
import ChatApp from "./pages/chat/ChatApp";


function App() {
  const Layout = () => {
    return (
      <div className="app">
        
      
          <Navbar />
        <ErrorBoundary> 
        <Outlet />
        </ErrorBoundary> 
        <Chatbot />
        <Footer />
       
      </div>
    );
  }


  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ErrorBoundary> {/* Wrap Home with ErrorBoundary */}
              <Home />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs1",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs1 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/chat",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <ChatApp/>
            </ErrorBoundary>
          ),
        },
        
        {
          path: "/gigs",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs2",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs2 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs3",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs3 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs4",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs4 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs5",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs5 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs6",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs6 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs7",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs7 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gigs8",
          element: (
            <ErrorBoundary> {/* Wrap Gigs with ErrorBoundary */}
              <Gigs8 />
            </ErrorBoundary>
          ),
        },
        {
          path: "/signin",
          element: (
            <ErrorBoundary> {/* Wrap Signin with ErrorBoundary */}
              <Signin />
            </ErrorBoundary>
          ),
        },
        {
          path: "/signinuser",
          element: (
            <ErrorBoundary> {/* Wrap Signinuser with ErrorBoundary */}
              <Signinuser />
            </ErrorBoundary>
          ),
        },
        {
          path: "/myGigs",
          element: (
            <ErrorBoundary> {/* Wrap MyGigs with ErrorBoundary */}
              <MyGigs />
            </ErrorBoundary>
          ),
        },
        {
          path: "/orders",
          element: (
            <ErrorBoundary> {/* Wrap Orders with ErrorBoundary */}
              <Orders />
            </ErrorBoundary>
          ),
        },
        {
          path: "/messages",
          element: (
            <ErrorBoundary> {/* Wrap Messages with ErrorBoundary */}
              <Messages />
            </ErrorBoundary>
          ),
        },
        {
          path: "/message/:id",
          element: (
            <ErrorBoundary> {/* Wrap Message with ErrorBoundary */}
              <Message />
            </ErrorBoundary>
          ),
        },
        {
          path: "/add",
          element: (
            <ErrorBoundary> {/* Wrap Add with ErrorBoundary */}
              <Add />
            </ErrorBoundary>
          ),
        },
        {
          path: "/gig/:id",
          element: (
            <ErrorBoundary> {/* Wrap Gig with ErrorBoundary */}
              <Gig />
            </ErrorBoundary>
          ),
        },
      ],
    },
    {
      path: "/register",
      element: (
        <ErrorBoundary> {/* Wrap Register with ErrorBoundary */}
          <Register />
        </ErrorBoundary>
      ),
    },
    {
      path: "/login",
      element: (
        <ErrorBoundary> {/* Wrap Login with ErrorBoundary */}
          <Login />
        </ErrorBoundary>
      ),
    },
  ]);


  

  return <RouterProvider router={router} />;
}



export default App;