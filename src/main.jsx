import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './components/AddCoffee.jsx';
import CoffeeUpdate from './components/CoffeeUpdate.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path:"addcoffee",
    element:<AddCoffee></AddCoffee>
  },
  {
    path:"updatecoffee/:id",
    element:<CoffeeUpdate></CoffeeUpdate>,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
