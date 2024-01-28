import { useQuery } from "react-query";
import { Api } from "./axios";


const useGetList = (key: string | [string, string], url: string) => {
    const get = async () => {
        const urlQuery = Array.isArray(key) ? url + key[1] : url
        const data = await Api.get(urlQuery)

        return data
    }
    return useQuery(key,( () => get()))
}

export default { useGetList };
