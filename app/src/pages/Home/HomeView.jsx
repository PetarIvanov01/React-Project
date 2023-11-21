import { SectionStyle } from "../../styles/layout/Main.style"

import SectionCards from "./components/SectionCards"

export default function HomeView() {

    return (
        <>
            <SectionStyle>
                <div className="title">
                    <h2>Share your goals with people and grow together</h2>
                </div>
            </SectionStyle>

            <SectionCards />
        </>
    )
}