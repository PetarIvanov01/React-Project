import { useParams } from "react-router-dom";
import { ProfileProvider } from "../../../contexts/profile";
import ProfileContainer from "./ProfileContainer";

export default function ProfileView() {

    const { userId } = useParams();


    return (

        <ProfileProvider userId={userId}>
            
            <ProfileContainer />

        </ProfileProvider>
    );
}