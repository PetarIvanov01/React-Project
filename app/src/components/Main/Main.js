import { Route, Routes } from "react-router-dom"

import { MainStyle } from "../../styles/Main.style";

import HomeView from "../Views/Home/HomeView";
import LoginView from "../Views/Login/LoginView";
import RegisterView from "../Views/Register/RegisterView";
import CatalogView from "../Views/Goals/Catalog/Catalog";
import ProfileView from "../Views/Profile/ProfileView";
import CreateView from "../Views/CRUD/Create/CreateView";
import CreateProfile from "../Views/CRUD/Create/CreateProfile";

export default function Main() {


    return (

        <MainStyle>

            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/goals" element={<CatalogView />} />
                <Route path="/profile/:userId" element={<ProfileView />} />
                <Route path="/login" element={<LoginView />} />
                <Route path="/register" element={<RegisterView />} />
                <Route path="/create" element={<CreateView />} />
                <Route path="/create/profile" element={<CreateProfile />} />
            </Routes>


        </MainStyle>

    )
}