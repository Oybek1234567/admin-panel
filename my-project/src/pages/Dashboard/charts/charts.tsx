import { Card } from "antd";
// import { Chart as ChartJS } from "chart.js/auto";
// import { Bar, } from "react-chartjs-2";
const Charts = () => {
    return (
        <div className='flex gap-[55px]'>
            <Card className='w-[810px] h-[340px]'>
                {/* <Bar
                    data={{
                        labels: ["A", "B", "C"],
                        datasets: [
                            {
                                label: "Revenue",
                                data: [200, 300, 400],
                            },
                            {
                                label: "Loss",
                                data: [90, 80, 70],
                            },
                        ],
                    }}
                /> */}
            </Card>
            <Card className='w-[374px] h-[340px]'></Card>
        </div>
    );
};

export default Charts;
