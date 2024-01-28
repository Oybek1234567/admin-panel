import { AxiosResponse } from "axios";

export const responseInteceptor = async (response: AxiosResponse) => {
    return response.data
}