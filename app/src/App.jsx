import { ContainerStyle } from "./styles/layout/App.style"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import AuthProvider from "./contexts/auth"

export default function App() {

    return (
        <ContainerStyle>

            <AuthProvider>
                <Header />
                <Main />
            </AuthProvider>
            
            <Footer />
        </ContainerStyle>
    )
}