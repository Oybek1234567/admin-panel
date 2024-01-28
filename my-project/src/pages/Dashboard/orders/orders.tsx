import { Card, Flex, Table, TableProps, Typography } from "antd";
import { IDataSource, dataSource } from "../../../constants/data";

const Orders = () => {
    const column: TableProps<IDataSource>["columns"] = [
        {
            dataIndex: "id",
            key: "id",
        },
        {
            dataIndex: "name",
            key: "name",
        },
        {
            dataIndex: "surname",
            key: "surname",
        },
        {
            dataIndex: "email",
            key: "email",
        },
        {
            dataIndex: "price",
            key: "price",
        },
        {
            dataIndex: "delivery",
            key: "delivery",
        },
        {
            dataIndex: "date",
            key: "date",
        },
    ];
    return (
        <>
            <Card>
                <Flex justify='space-between'>
                    <Typography className='text-2xl pb-6 font-medium'>
                        Latest orders
                    </Typography>
                </Flex>
                <Table dataSource={dataSource} columns={column} />
            </Card>
        </>
    );
};

export default Orders;
