export interface IDataSource {
    key: number;
    id: string;
    name: string;
    surname: string;
    email: string;
    price: string;
    delivery: string;
    date: string;
}
export const dataSource: IDataSource[] = [
    {
        key: 1,
        id: "2323",
        name: "Devon",
        surname: "Lane",
        email: "devon@example.com",
        price: "$778.35",
        delivery: "Delivered",
        date: "07.05.2020",
    },
    {
        key: 2,
        id: "2458",
        name: "Darrell",
        surname: "Steward",
        email: "darrell@example.com",
        price: "$219.78",
        delivery: "Canceled",
        date: "03.07.2020",
    },
    {
        key: 3,
        id: "6289",
        name: "Darlene",
        surname: "Robertson",
        email: "darlene@example.com",
        price: "$928.41",
        delivery: "Pending",
        date: "23.03.2020",
    },
    {
        key: 4,
        id: "3869",
        name: "Courtney",
        surname: "Henry",
        email: "courtney@example.com",
        price: "$90.51",
        delivery: "Delivered",
        date: "23.03.2020",
    },
    {
        key: 5,
        id: "1247",
        name: "Eleanor",
        surname: "Pena",
        email: "eleanor@example.com",
        price: "$275.43",
        delivery: "Delivered",
        date: "10.03.2020",
    },
    {
        key: 6,
        id: "3961",
        name: "Ralph",
        surname: "Edwards",
        email: "ralph@example.com",
        price: "$630.44",
        delivery: "Delivered",
        date: "23.03.2020",
    },
];
