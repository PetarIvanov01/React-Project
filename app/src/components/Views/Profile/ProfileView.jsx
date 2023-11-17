import { useParams } from "react-router-dom";
import ProfileContainer from "./ProfileContainer";

export default function ProfileView() {

    const { userId } = useParams();

    return (
        <ProfileContainer userId={userId} />
    );
}
