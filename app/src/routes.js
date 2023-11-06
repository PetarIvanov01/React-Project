import { lazy } from "react";

import LoginView from "./components/Views/Login/LoginView";
import RegisterView from "./components/Views/Register/RegisterView";
import ProfileView from "./components/Views/Profile/ProfileView";
import CreateGoalView from "./components/Views/CRUD/Create/CreateGoalView";
import CreateProfile from "./components/Views/CRUD/Create/CreateProfile";
import EditProfile from "./components/Views/CRUD/Edit/EditProfile";
import EditGoalView from "./components/Views/CRUD/Edit/EditGoalView";
import Logout from "./components/Views/Logout/LogoutFunc";
import DeleteGoalView from "./components/Views/CRUD/Delete/DeleteGoalView";

const HomeView = lazy(() => import("./components/Views/Home/HomeView"));
const CatalogView = lazy(() => import("./components/Views/Goals/Catalog/Catalog"));


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