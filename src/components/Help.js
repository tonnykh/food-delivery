import React, { useState } from 'react';

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <>
      <h2>{title}</h2>
      {isVisible ? (
        <>
          <button className="underline" onClick={() => setIsVisible()}>
            hide
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button className="underline" onClick={() => setIsVisible()}>
          show
        </button>
      )}
    </>
  );
};

const Help = () => {
  const [sectionConfig, setSectionConfig] = useState('');
  return (
    <>
      <h2>Help</h2>
      <Section
        title={'Team'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam eum eos placeat facere quia, natus repudiandae nostrum recusandae expedita!'
        }
        isVisible={sectionConfig === 'team'}
        setIsVisible={() => {
          sectionConfig !== 'team'
            ? setSectionConfig('team')
            : setSectionConfig('');
        }}
      >
        {}
      </Section>
      <Section
        title={'Culture'}
        description={
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam eum eos placeat facere quia, natus repudiandae nostrum recusandae expedita!'
        }
        isVisible={sectionConfig === 'culture'}
        setIsVisible={() => {
          sectionConfig !== 'culture'
            ? setSectionConfig('culture')
            : setSectionConfig('');
        }}
      ></Section>
    </>
  );
};

export default Help;
