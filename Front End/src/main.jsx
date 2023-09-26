import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DogCatalog from './pages/catalogDog'
import Dog from './pages/dog'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/CatalogForDogs', element: <DogCatalog /> },
  { path: '/CatalogForDogs/:idFilme', element: <Dog /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)