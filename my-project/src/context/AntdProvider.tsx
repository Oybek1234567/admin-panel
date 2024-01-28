import { FC, PropsWithChildren } from "react";
import { ConfigProvider } from "antd";

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#166199",
                    borderRadius: 6,
                },
                components: {
                    Layout: {
                        siderBg: "#fff",
                        headerBg: "#fff",
                   }
                },
            }}>
            {children}
        </ConfigProvider>
    );
};

export default AntdProvider;
