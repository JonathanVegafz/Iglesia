import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css";
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './vistas/home.jsx';
import Cancion from './vistas/cancion.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/cancion",
    element: <Cancion/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
