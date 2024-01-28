import {
    AppstoreOutlined,
    GoldOutlined,
    HomeOutlined,
    SettingOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { ReactNode } from "react";

interface IMenuList {
    id: number;
    title: string;
    path: string;
    icon: ReactNode;
}
const menuList: IMenuList[] = [
    {
        id: 1,
        title: "Dashboard",
        path: "/",
        icon: <HomeOutlined />,
    },
    {
        id: 2,
        title: "Product",
        path: "/product",
        icon: <AppstoreOutlined />,
    },
    {
        id: 3,
        title: "Order",
        path: "/order",
        icon: <GoldOutlined />,
    },
    {
        id: 4,
        title: "Customers",
        path: "/cust",
        icon: <UserOutlined />,
    },
    {
        id: 5,
        title: "Settings",
        path: "/set",
        icon: <SettingOutlined />,
    },
];

export { menuList };