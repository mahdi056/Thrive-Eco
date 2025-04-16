import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import Products from './Components/Products';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import AuthProvider from './Components/Provider/AuthProvider';
import EcoTech from './Components/EcoTech';
import EcoHome from './Components/EcoHome';
import SustainableFashion from './Components/SustainableFashion';
import GreenBeauty from './Components/GreenBeauty';
import OrganicFood from './Components/OrganicFood';
import GreenBeautyDetails from './Components/GreenBeautyDetails';
import EtDetails from './Components/EtDetails';
import EcoHomeDetails from './Components/EcoHomeDetails';
import SustainableFashionDetails from './Components/SustainableFashionDetails';
import OrganicFoodDetails from './Components/OrganicFoodDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        index: true,
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/eco-tech',
        element: <EcoTech></EcoTech>
      },
      {
        path: '/eco-tech/:id',
        element: <EtDetails></EtDetails>
      },
      {
        path: '/eco-home',
        element: <EcoHome></EcoHome>
      },
      {
        path: '/eco-home/:id',
        element: <EcoHomeDetails></EcoHomeDetails>
      },
      {
        path: '/sustainable-fashion',
        element: <SustainableFashion></SustainableFashion>
      },
      {
        path: '/sustainable-fashion/:id',
        element: <SustainableFashionDetails></SustainableFashionDetails>
      },
      {
        path: '/green-beauty',
        element: <GreenBeauty></GreenBeauty>
      },
      {
        path: '/green-beauty/:id',
        element: <GreenBeautyDetails></GreenBeautyDetails>
      },
      {
        path: '/organic-food',
        element: <OrganicFood></OrganicFood>
      },
      {
        path: '/organic-food/:id',
        element: <OrganicFoodDetails></OrganicFoodDetails>
      }

           
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
