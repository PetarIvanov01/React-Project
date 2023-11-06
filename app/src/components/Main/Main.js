import { Route, Routes } from "react-router-dom"

import { MainStyle } from "../../styles/Main.style";

import { Suspense } from "react";
import { SpinnerStyle } from "../../util/SuspenseSpinner";

import { authRouts, privateRoutes, publicRoutes } from "../../routes";

export default function Main() {

    return (
        <MainStyle>

            <Suspense fallback={<SpinnerStyle />}>

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

                </Routes>

            </Suspense>
        </MainStyle>
    )
}