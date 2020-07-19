import React from 'react';
import { Link } from 'react-router-dom';

const PersonListElement = ({ person, setPerson }) => {
  return (
    <div className='card col-12 p-1 h-100'>
      <div className='card-body text-center d-flex flex-column justify-content-around'>
        <h5 className='card-title font-weight-bold text-primary mb-4'>
          {person.name} {person.surname}
        </h5>
        <div className='m-n2'>
          <p>
            Age: <span className='font-weight-bold'>{person.age}</span>
          </p>
          <p>
            Phone Number:{' '}
            <span className='font-weight-bold'>{person.phone}</span>
          </p>
        </div>
      </div>
      <Link
        to={`/person/${person.id}`}
        className='btn btn-primary m-2'
        onClick={() => {
          setPerson(person);
        }}
      >
        Details
      </Link>
    </div>
  );
};

export default PersonListElement;
