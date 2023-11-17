import { useSyncExternalStore } from "react";

export default function useAuthStore() {

    const setUser = (newValue) => {
        const stringify = JSON.stringify(newValue);

        window.localStorage.setItem("userData", stringify);

        window.dispatchEvent(
            new StorageEvent("storage", { key: "userData" })
        );
    };

    const getStore = () => localStorage.getItem("userData");

    const subscribe = (listener) => {
        window.addEventListener("storage", listener);
        return () => window.removeEventListener("storage", listener);
    };

    const store = useSyncExternalStore(subscribe, getStore);

    return [store, setUser];
}