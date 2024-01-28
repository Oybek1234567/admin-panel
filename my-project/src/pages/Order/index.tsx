import { Button, Flex, Table, TableProps, Typography } from "antd";
import { useState } from "react";
import DrowerPage from "../../constants/drawer";
import { IDataSource, dataSource } from "../../constants/data";

const Order = () => {

       const [open, setOpen] = useState(false);

       const showDrawer = () => {
           setOpen(true);
       };
       const onClose = () => {
           setOpen(false);
    };
    
    const column: TableProps<IDataSource>["columns"] = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
        },
    ];
    return (
        <section>
            <Flex justify='space-between'>
                <Typography className='text-2xl pb-6 font-medium'>
                    Products
                </Typography>
                <Button
                    className='flex items-center bg-[#166199] border-none'
                    onClick={showDrawer}
                    type='primary'>
                    + Create new
                </Button>
                <DrowerPage open={open} onClose={onClose} />
            </Flex>
            <Table dataSource={dataSource} columns={column} />
        </section>
    );
};

export default Order;
