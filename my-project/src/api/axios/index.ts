import axios from "axios";
import { baseURL } from "../../constants/urls";
import { responseInteceptor } from "./ResponseInpeceptor";
import { errorInterceptor } from "./ErrorInterceptor";
import { getLocalStorage } from "../../utils/helpers";

export const Api = axios.create({
    baseURL,
});

Api.interceptors.request.use((config) => {
    const token = getLocalStorage("accessToken");

    if (token) {
        config.headers.Authorization = `Barer ${token}`;
    }

    return config;
});

Api.interceptors.response.use(
    (response) => responseInteceptor(response),
    (error) => errorInterceptor(error)
);
