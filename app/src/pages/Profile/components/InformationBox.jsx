import { BlurredBackground, InformationBoxContainer } from "../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style";

export default function InformationBox({ isVisible, topic, onClose }) {

  const { image, description, title } = topic;

  return (
    <BlurredBackground $show={isVisible} >
      {isVisible && (
        <InformationBoxContainer>
          <img src={image} alt="" />
          <h2 className='title'>Title: {title}</h2>
          <p><span className='desc'>Description:</span> {description}</p>
          <button onClick={onClose}>Close</button>
        </InformationBoxContainer>
      )}
    </BlurredBackground>
  );
}
