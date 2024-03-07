import React, { useState } from 'react';
import '../../sass/layout/_collapse.scss';
import ArrowBackUp from '../../assets/collapse/arrow-back_up.png'
import ArrowBackDown from '../../assets/collapse/arrow-back_down.png'


function Collapse({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='collapse-apropos' key={id}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <h2>{title}</h2>
        <img src={isOpen ? ArrowBackDown : ArrowBackUp} alt="Arrow" className="arrow-back" />
      </div>
      {isOpen && (
        <div className="collapse-body">
          <p>{description}</p>
        </div>
      )}
    </section>
  );
}

export default Collapse;
