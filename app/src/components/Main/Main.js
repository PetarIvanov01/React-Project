import { Route, Routes } from "react-router-dom"

import { MainStyle } from "../../styles/Main.style";

import HomeView from "../Views/Home/HomeView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import CatalogView from "../Views/Goals/Catalog/Catalog";
import ProfileView from "../Views/Profile/ProfileView";
import CreateGoalView from "../Views/CRUD/Create/CreateGoalView";
import CreateProfile from "../Views/CRUD/Create/CreateProfile";
import EditProfile from "../Views/CRUD/Edit/EditProfile";
import EditGoalView from "../Views/CRUD/Edit/EditGoalView";
import Logout from "../Views/Logout/LogoutFunc";
import DeleteGoalView from "../Views/CRUD/Delete/DeleteGoalView";

export default function Main() {

    //TODO Add guards for not authorized requests

    return (

        <MainStyle>

            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/goals" element={<CatalogView />} />

                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/create/profile" element={<CreateProfile />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="/create" element={<CreateGoalView />} />
                <Route path="/edit/goal/:goalId" element={<EditGoalView />} />
                <Route path="/profile/:userId/*" element={<ProfileView />} />
                <Route path="/edit/profile/:userId" element={<EditProfile />} />
                <Route path="/delete/goal/:goalId" element={<DeleteGoalView />} />
            </Routes>

        </MainStyle>

    )
}