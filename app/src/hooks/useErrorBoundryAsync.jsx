import { useErrorBoundary } from "react-error-boundary";
import tryCatchErr from "../util/errorChecker";
import { useCallback } from "react";

export default function useErrorBoundryAsync() {
    const { showBoundary } = useErrorBoundary();

    return useCallback((err) => {
        showBoundary(tryCatchErr(err));
    }, [showBoundary])
}