import { Card } from "antd";
import { Icons } from "../../../constants/icons";


const Cards = () => {
    return (
        <div className='flex gap-[60px]'>
            <Card className='w-[374px] h-[120px]'>
                <div className='mt-[px] w-[72px] h-[72px] bg-[#FF9017] opacity-20 rounded-full'></div>
                <Icons.money className='mt-[-55px] ml-[17px]' />
                <p className='ml-[90px] mt-[-40px] text-base text-[#AEB6CA]'>
                    Total Sales
                </p>
                <h1 className='ml-[90px] text-lg font-semibold'>
                    $19,626,058.20
                </h1>
            </Card>
            <Card className='w-[374px] h-[120px]'>
                <div className='mt-[px] w-[72px] h-[72px] bg-[#00B517] opacity-20 rounded-full'></div>
                <Icons.shop className='mt-[-55px] ml-[17px]' />
                <p className='ml-[90px] mt-[-40px] text-base text-[#AEB6CA]'>
                    Total Orders
                </p>
                <h1 className='ml-[90px] text-lg font-semibold'>3290</h1>
            </Card>
            <Card className='w-[374px] h-[120px]'>
                <div className='mt-[px] w-[72px] h-[72px] bg-[#3167EB] opacity-20 rounded-full'></div>
                <Icons.basket className='mt-[-55px] ml-[17px]' />
                <p className='ml-[90px] mt-[-40px] text-base text-[#AEB6CA]'>
                    Total Products
                </p>
                <h1 className='ml-[90px] text-lg font-semibold'>332</h1>
            </Card>
        </div>
    );
};

export default Cards;
