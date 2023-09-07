import React from 'react';
import { BlurredBackground, InformationBoxContainer } from '../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style';

export default function InformationBox({ isVisible, topic, onClose }) {


  const { image, description, title } = topic;

  return (
    <div>
      <BlurredBackground $show={isVisible} />
      {isVisible && (
        <InformationBoxContainer>
          <img src={image} alt="" />
          <h2>Title: {title}</h2>
          <p>Description: {description}</p>
          {/* Max-230 char */}
          <button onClick={onClose}>Close</button>
        </InformationBoxContainer>
      )}
    </div>
  );
}
