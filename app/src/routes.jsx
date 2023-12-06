import { lazy } from "react";

import LoginView from "./pages/Login/LoginView";
import RegisterView from "./pages/Register/RegisterView";
import CreateGoalView from "./pages/CRUD/Create/CreateGoalView";
import CreateProfile from "./pages/CRUD/Create/CreateProfile";
import EditProfile from "./pages/CRUD/Edit/EditProfile";
import EditGoalView from "./pages/CRUD/Edit/EditGoalView";
import Logout from "./pages/Logout/LogoutFunc";
import DeleteGoalView from "./pages/CRUD/Delete/DeleteGoalView";
import Comments from "./pages/Profile/components/Comments/Comments";
import { OnlyUser } from "./components/RouteGuards/OnlyUser";
import { OnlyGuest } from "./components/RouteGuards/OnlyGuest";
import { HasProfile, WithoutProfile } from "./components/RouteGuards/ProfileGuards";
import { OwnerGuard } from "./components/RouteGuards/IsOwner";

const HomeView = lazy(() => import("./pages/Home/HomeView"));
const CatalogView = lazy(() => import("./pages/Catalog/Catalog"));
const ProfileView = lazy(() => import("./pages/Profile/ProfileView"));

export const publicRoutes = [
    {
        path: '/',
        element: () => (
            <WithoutProfile>
                <HomeView />
            </WithoutProfile>
        )
    },
    {
        path: '/goals',
        element: () => (
            <WithoutProfile>
                <CatalogView />
            </WithoutProfile>
        )
    },
    {
        path: '/post/:postId/comments',
        element: () => <Comments />
    },
    {
        path: '/profile/:userId/*',
        element: () => (
            <WithoutProfile>
                <ProfileView />
            </WithoutProfile>
        )
    }
]

export const authRouts = [
    {
        path: '/login',
        element: () => (
            <OnlyGuest>
                <LoginView />
            </OnlyGuest>
        )
    },
    {
        path: '/register',
        element: () => (
            <OnlyGuest>
                <RegisterView />
            </OnlyGuest>
        )
    },
    {
        path: '/logout',
        element: () => (
            <OnlyUser>
                <Logout />
            </OnlyUser>
        )
    }
]

export const privateRoutes = [
    {
        path: '/create/profile',
        element: () =>
        (<HasProfile>
            <CreateProfile />
        </HasProfile>)
    },
    {
        path: '/create',
        element: () =>
        (<OnlyUser>
            <CreateGoalView />
        </OnlyUser>)
    },
    {
        path: '/edit/goal/:goalId',
        element: () =>
            <EditGoalView />
    },

    {
        path: '/edit/profile/:userId',
        element: () =>
        (<OwnerGuard>
            <EditProfile />
        </OwnerGuard>)
    },
    {
        path: '/delete/goal/:goalId',
        element: () =>
            <DeleteGoalView />
    }
]