import { lazy } from "react";
const Dashboard = lazy(() => import("./Dashboard"));
const Product = lazy(() => import("./Product"));
const Order = lazy(() => import("./Order"));
const Customers = lazy(() => import("./Customers"));

export { Dashboard, Product, Order, Customers };