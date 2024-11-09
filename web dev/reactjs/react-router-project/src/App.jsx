import { useState } from 'react'
import './App.css'
import {createBrowserRouter,  Navigate,  Route,  RouterProvider,} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element:<div>
      <Navbar />
      <Home />
      </div>
    },
    {
      path:"/about",
      element:<div>
      <Navbar />
      <About />
      </div>
    },
    {
      path:"/dashboard",
      element:<div>
      <Navbar />
      <Dashboard />
      </div>
    },
    {
      // url Route parameter
      path:"/student/:id",
      element: <div>
      <Navbar />
      <ParamComp />
      </div>
    },
  ]
);

function App() {

  return (
<div>
<RouterProvider router={router} />
</div>
  )
}

export default App
