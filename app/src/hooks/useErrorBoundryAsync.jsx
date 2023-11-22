import { useErrorBoundary } from "react-error-boundary";
import tryCatchErr from "../util/errorChecker";

export default function useErrorBoundryAsync() {
    const { showBoundary } = useErrorBoundary();

    return (err) => {
        showBoundary(tryCatchErr(err));
    }
}