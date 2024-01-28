import { Button, Drawer, Flex, Form, Input } from "antd";
import { FC } from "react";

interface PropsProductForm {
    open: boolean;
    onClose: () => void;
}

const DrowerPage: FC<PropsProductForm> = ({ onClose, open }) => {
    const handlyFinish = () => {
        onClose();
    };

    return (
        <Drawer width={320} onClose={onClose} open={open}>
            <Form initialValues={{ remember: true }}>
                <Form.Item
                    label={"Name"}
                    rules={[
                        {
                            required: true,
                            message: "Please input your username!",
                        },
                    ]}>
                    <Input placeholder='Name' />
                </Form.Item>

                <Form.Item
                    className='flex flex-col'
                    label={"Age"}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input type='number|string' placeholder='Age' />
                </Form.Item>

                <Form.Item
                    label={"Address"}
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input placeholder='Address' />
                </Form.Item>
            </Form>

            {/* <Input type='text' placeholder='Name' />
                <Input type='number' placeholder='Age' />
                <Input type='text' placeholder='Address' /> */}
            <Flex justify='center' gap='50px'>
                <Button
                    onClick={onClose}
                    className='bg-[#166199] border-none'
                    type='primary'>
                    Cancel
                </Button>
                <Button
                    className='bg-[#166199] border-none'
                    type='primary'
                    onClick={handlyFinish}>
                    + Create
                </Button>
            </Flex>
            {/* </Form> */}
        </Drawer>
    );
};

export default DrowerPage;
