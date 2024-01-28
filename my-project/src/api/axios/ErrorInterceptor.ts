import { message } from "antd";
import axios from "axios";
import {Api} from "./index"
import { Urls, baseURL } from "../../constants/urls";
import { getLocalStorage, setLocalStorage } from "../../utils/helpers";


export const errorInterceptor = async (error: any) => {
    const originalConfig = error.config

    if (error.message == "Network Error") {
        message.error("Network error")
        return Promise.reject(new Error("Network error"))
    }

    const refreshToken = getLocalStorage("refreshToken")

    if (error.response?.status == 401 && refreshToken !== null) {
        try {
            Api(originalConfig);
            const getRefresh: any = await axios.post(
                baseURL + Urls.auth.refresh,
                {
                    refreshToken,
                }
            );

            if (getRefresh.success) {
                const { accessToken } = getRefresh.data;
                setLocalStorage("accessToken", accessToken);
            }

            window.location.href = "/login";
            return Promise.reject(error);
        } catch (error) {
             window.location.href = "/login";
             console.log(error);
             return Promise.reject(error);
        }
    }
}