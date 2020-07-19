import React from 'react';
import PersonListElement from './PersonListElement';

const PersonList = (props) => {
  return (
    <div className='container'>
      <div className='row p-3'>
        {props.data.map((person) => (
          <div className='col-xs-12 col-lg-4 col-xl-3 mt-4' key={person.id}>
            <PersonListElement person={person} setPerson={props.setPerson} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonList;
