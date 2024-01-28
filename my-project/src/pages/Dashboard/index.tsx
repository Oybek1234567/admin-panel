import Cards from "./cards/cards";
import Charts from "./charts/charts";
import Orders from "./orders/orders";
const Index = () => {
    return (
        <div>
            <h1 className="text-2xl font-semibold mb-[30px]">Dashboard</h1>
            <Cards />,
            <Charts />,
            <Orders />,
        </div>
    );
};

export default Index;
