import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer, Flex, Layout, Menu, } from "antd";
import { Suspense, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Icons } from "../../constants/icons";
import { menuList } from "../../constants/menuList";
import Lazy from "../../companents/Lazy";
import { router } from "../../constants/router";

const { Sider, Header, Content } = Layout;

const AppRouters = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className='flex'>
                <Layout className='main'>
                    <Sider trigger={null} collapsible width={200}>
                        <Flex justify='center' className='py-3'>
                            <Icons.logo />
                        </Flex>
                        <Menu
                            mode='inline'
                            defaultSelectedKeys={["1"]}
                            items={menuList.map((item) => {
                                return {
                                    key: item.id,
                                    label: (
                                        <Link to={item.path}>{item.title}</Link>
                                    ),
                                    icon: item.icon,
                                };
                            })}
                        />
                    </Sider>
                </Layout>
                <Layout>
                    <Header
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "30px",
                        }}>
                        <Button
                            type='primary'
                            className='resp_menu_btn'
                            onClick={showDrawer}>
                            <MenuOutlined />
                        </Button>
                        <img src='' alt='' />
                        <input type='text' placeholder='search' />
                    </Header>

                    <Content
                        style={{
                            margin: "24px 16px",
                            padding: 24,
                            minHeight: 280,
                            background: "inherit",
                            borderRadius: "8px",
                        }}>
                        <Suspense fallback={<Lazy />}>
                            <Routes>
                                {router.map((item) => (
                                    <Route
                                        path={item.path}
                                        element={item.element}
                                        key={item.id}
                                    />
                                ))}
                            </Routes>
                        </Suspense>
                    </Content>
                </Layout>
            </div>
            <div className='resp__menu'>
                <Drawer
                    title={
                        <Flex className='py-3'>
                            <Icons.logo />
                        </Flex>
                    }
                    placement='left'
                    width={"80%"}
                    onClose={onClose}
                    open={open}>
                    <Menu
                        mode='inline'
                        defaultSelectedKeys={["1"]}
                        items={menuList.map((item) => {
                            return {
                                key: item.id,
                                label: (
                                    <Link
                                        onClick={() => onClose()}
                                        to={item.path}>
                                        {item.title}
                                    </Link>
                                ),
                                icon: item.icon,
                            };
                        })}
                    />
                </Drawer>
            </div>
        </>
    );
};
export default AppRouters;
