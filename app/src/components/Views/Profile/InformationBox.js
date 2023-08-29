import React from 'react';
import { BlurredBackground, InformationBoxContainer } from '../../../styles/ViewsStyles/ProfileStyle/InformationalBox.style';

export default function InformationBox({ isVisible, topic, onClose }) {
  return (
    <div>
      <BlurredBackground show={isVisible} />
      {isVisible && (
        <InformationBoxContainer>
          <img src="/imgs/goals-1.png" alt="" />
          <h2>Title: {topic}</h2>
          <p>Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore atque cum fuga repellat harum expedita officia neque adipisci maiores aliquid repellendus iure aperiam similique illum voluptatibus, sequi temporibus velit, amet consequuntur rerum magnam minima natus voluptate aut. Eligendi sed, commodi laudantium repudiandae, delectus soluta optio rem dolores eaque voluptates consequatur vel maiores tenetur animi necessitatibus ratione vitae explicabo, perferendis vero? Repellendus quo quisquam aspernatur quod nostrum, sunt commodi sint totam voluptates at laborum qui voluptas, recusandae rem vel omnis maxime nemo accusantium eveniet? Accusamus, impedit. Minus porro quisquam dolorum doloribus id a. Recusandae sunt quod odio sequi, vitae nam architecto ab, velit tempore optio exercitationem veniam modi delectus distinctio consequuntur at quas odit autem ex, voluptas cupiditate temporibus doloremque numquam. Nemo, dolorem! Voluptatem, officia! Est laborum et, consequatur facilis aut dolores accusamus ut quis assumenda illo at magni cumque voluptatibus in nesciunt nihil, dolor, deleniti quia rerum quaerat dicta maiores consequuntur quasi aspernatur? Est assumenda minus natus quas necessitatibus. Ducimus alias minima nisi qui ipsum, similique doloribus error, voluptatibus odit voluptatum possimus accusantium accusamus totam, in quam earum id aliquam eos magni deserunt atque fuga recusandae amet. Nesciunt voluptate nemo mollitia perspiciatis minima molestiae beatae nisi nobis qui. Commodi incidunt officiis eaque! Qui quisquam ut nemo maiores magni ipsam! Earum porro unde voluptas molestiae deserunt necessitatibus perspiciatis quibusdam, vitae reiciendis maxime sapiente provident quos laborum aspernatur mollitia, praesentium dolorem in! </p>
          {/* Max-230 char */}
          <button onClick={onClose}>Close</button>
        </InformationBoxContainer>
      )}
    </div>
  );
}
