import { ContainerStyle } from "./styles/App.style"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"

export default function App() {


    return (
        <ContainerStyle>
            <Header />
            <Main />
            <Footer />
        </ContainerStyle>
    )
}