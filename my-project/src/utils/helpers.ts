export const shortText = (str: string) => {
    return str.slice(0, 20) + "...";
};

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const setLocalStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value);
};
