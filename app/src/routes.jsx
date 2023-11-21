import { lazy } from "react";

import LoginView from "./pages/Login/LoginView";
import RegisterView from "./pages/Register/RegisterView";
import CreateGoalView from "./pages/CRUD/Create/CreateGoalView";
import CreateProfile from "./pages/CRUD/Create/CreateProfile";
import EditProfile from "./pages/CRUD/Edit/EditProfile";
import EditGoalView from "./pages/CRUD/Edit/EditGoalView";
import Logout from "./pages/Logout/LogoutFunc";
import DeleteGoalView from "./pages/CRUD/Delete/DeleteGoalView";

const HomeView = lazy(() => import("./pages/Home/HomeView"));
const CatalogView = lazy(() => import("./pages/Catalog/Catalog"));
const ProfileView = lazy(() => import("./pages/Profile/ProfileView"));


export const publicRoutes = [
    {
        path: '/',
        element: () => <HomeView />
    },
    {
        path: '/goals',
        element: () => <CatalogView />
    }
]
export const authRouts = [
    {
        path: '/login',
        element: () =>
            <LoginView />
    },
    {
        path: '/register',
        element: () =>
            <RegisterView />

    },
    {
        path: '/logout',
        element: () =>
            <Logout />

    },
    {
        path: '/create/profile',
        element: () =>
            <CreateProfile />

    }
]

export const privateRoutes = [
    {
        path: '/create',
        element: () =>
            <CreateGoalView />
    },
    {
        path: '/edit/goal/:goalId',
        element: () =>
            <EditGoalView />

    },
    {
        path: '/profile/:userId/*',
        element: () =>
            <ProfileView />

    },
    {
        path: '/edit/profile/:userId',
        element: () =>
            <EditProfile />

    },
    {
        path: '/delete/goal/:goalId',
        element: () =>
            <DeleteGoalView />

    }
]