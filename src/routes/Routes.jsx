import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../pages/Home";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Category from "../Componets/Home/Category";
import CategoryCard from "../Componets/Home/CategoryCard";
import Allcoffees from "../Componets/Home/Allcoffees";
import CoffeeDetails from "../pages/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayouts/>,
    children:[
        {
            path:"/",
            element:<Home/>,
            loader:()=>fetch('../categories.json'),
            children:[
                {
                    path:"/category/:category",
                    element:<CategoryCard/>,
                    loader:()=>fetch('../coffees.json'),
                },
                {
                    path:"/",
                    element:<CategoryCard/>,
                    loader:()=>fetch('../coffees.json'),
                    

                }
            ],
        },
        {
            path:"/coffees",
            element:<Coffees/>,
            loader:()=>fetch('../coffees.json'),
        },
        {
            path:"/coffees/:id",
            element:<CoffeeDetails/>,
            loader:()=>fetch('../coffees.json'),
            
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
        }
    ]
  }
])