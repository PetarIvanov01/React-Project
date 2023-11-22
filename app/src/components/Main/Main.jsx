import { Route, Routes } from "react-router-dom"

import { MainStyle } from "../../styles/layout/Main.style";

import { Suspense } from "react";
import { SpinnerStyle } from "../SuspenseSpinner";

import { authRouts, privateRoutes, publicRoutes } from "../../routes";

import { ErrorBoundary } from "react-error-boundary";
import ErrorModalComponent from "../../pages/ErrorModals/ErrorModal";

import NotFound from "../../pages/ErrorModals/NotFoundRoute";

export default function Main() {

    return (
        <MainStyle>

            <Suspense fallback={<SpinnerStyle />}>
                <ErrorBoundary
                    FallbackComponent={ErrorModalComponent}
                >
                    <Routes>

                        {publicRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element()} />
                        ))}

                        {authRouts.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element()} />
                        ))}

                        {privateRoutes.map((route) => (
                            <Route key={route.path} path={route.path} element={route.element()} />
                        ))}

                        {<Route path="*" element={<NotFound />} />}

                    </Routes>
                </ErrorBoundary>
            </Suspense>
        </MainStyle >
    )
}




