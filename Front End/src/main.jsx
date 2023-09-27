import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import DogCatalog from './pages/catalogDog'
import Dog from './pages/player'
import CatCatalog from './pages/catalogCat'
import Player from './pages/player'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/CatalogForDogs', element: <DogCatalog /> },
  { path: '/CatalogForDogs/:idFilme', element: <Player /> },
  { path: '/CatalogForCats', element: <CatCatalog /> }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)