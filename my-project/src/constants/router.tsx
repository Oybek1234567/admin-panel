import { ReactNode } from "react";
import { Customers, Dashboard, Order, Product } from "../pages";
import Settings from "../pages/Settings";

interface IRouter{
    id: number,
    path: string,
    element:ReactNode
}
export const router: IRouter[] = [
    {
        id: 1,
        path: "/",
        element: <Dashboard />,
    },
    {
        id: 2,
        path: "/product",
        element: <Product />,
    },
    {
        id: 3,
        path: "/order",
        element: <Order />,
    },
    {
        id: 4,
        path: "/cust",
        element: <Customers />,
    },
    {
        id: 5,
        path: "/set",
        element: <Settings />,
    },
];
