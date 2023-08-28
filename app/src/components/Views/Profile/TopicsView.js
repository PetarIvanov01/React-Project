import { Link } from "react-router-dom";
import { CardTitle, CardTopics, Cards, DescriptionParagraph, TopicDescription, TopicsImage } from "../../../styles/ViewsStyles/ProfileStyle/Profile.style";

export default function TopicCardsView() {


    return (
        <Cards className="cards">
            
            <CardTopics className="card-topics">
                <TopicsImage src="/imgs/goals-1.png" alt="" />
                <CardTitle>
                    <p>Top 5 ways to improve your career</p>
                </CardTitle>
                <TopicDescription>
                    <DescriptionParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum interdum maximus. Maecenas consectetur eros sit amet dapibus placerat. Suspendisse non lacus at nisl imperdiet euismod id quis nisl. Quisque feugiat fermentum hendrerit erat curae.</DescriptionParagraph>
                    <Link to="#">Learn more...</Link>
                </TopicDescription>
            </CardTopics>

            <CardTopics className="card-topics">
                <TopicsImage src="/imgs/goals 2.png" alt="" />
                <CardTitle>
                    <p>Top 5 ways to improve your career</p>
                </CardTitle>
                <TopicDescription>
                    <DescriptionParagraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rutrum interdum maximus. Maecenas consectetur eros sit amet dapibus placerat. Suspendisse non lacus at nisl imperdiet euismod id quis nisl. Quisque feugiat fermentum hendrerit erat curae.</DescriptionParagraph>
                    <Link to="#">Learn more...</Link>
                </TopicDescription>
            </CardTopics>

        </Cards>
    )
}