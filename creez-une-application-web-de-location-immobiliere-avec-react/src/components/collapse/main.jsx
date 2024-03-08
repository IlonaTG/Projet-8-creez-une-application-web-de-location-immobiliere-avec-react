import React, { useState } from 'react';
import '../../sass/layout/_collapse.scss';
import ArrowBackUp from '../../assets/collapse/arrow-back_up.png'
import ArrowBackDown from '../../assets/collapse/arrow-back_down.png'


function Collapse({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  let contentElement;

  if (typeof description === 'string') {
    contentElement = <p>{description}</p>;
  } else if (Array.isArray(description)) {
    contentElement = description.map((item, index) => (
      <p key={index}>{item}</p>
    ));
  }


  return (
    <section className='collapse' key={id}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={isOpen ? ArrowBackDown : ArrowBackUp} alt="Arrow" className="arrow-back" />
      </div>
      {isOpen && (
        <div className="collapse-body">
          <p>{contentElement}</p>
        </div>
      )}
    </section>
  );
}

export default Collapse;
