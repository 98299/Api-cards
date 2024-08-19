import React from 'react';
import '../Card.css';

function Card({ title, description, link }) {
  return (


    <div className='row'>
      <div className="card col-10 ">

        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">Learn more</a>


      </div>
    </div>


  );
}

export default Card;
