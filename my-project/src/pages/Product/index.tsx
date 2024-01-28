import { Table, TableProps } from "antd";
import { IDataSource, dataSource } from "../../constants/data";

const ProductPage = () => {
    const columns: TableProps<IDataSource>["columns"] = [
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
    return <section>
        <Table dataSource={dataSource} columns={columns} />
    </section>;
};
export default ProductPage;
