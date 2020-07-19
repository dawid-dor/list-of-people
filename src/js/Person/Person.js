import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({ data }) => {
  const { name, surname, age, phone, gender, city, country } = data;
  return (
    <div>
      <div className='container text-center mt-5 mb-3 border border-secondary rounded bg-dark py-3 w-50'>
        <div className='mb-3 py-3'>
          <div>
            <h2 className='text-white'>
              {name} {surname}
            </h2>
          </div>
        </div>

        <div>
          <p>
            Age: <strong>{age}</strong>
          </p>
          <p>
            Phone: <strong>{phone}</strong>
          </p>

          <p>
            Gender: <strong>{gender}</strong>
          </p>
          <p>
            City: <strong>{city}</strong>
          </p>
          <p>
            Country: <strong>{country}</strong>
          </p>
        </div>
      </div>

      <div className='container text-center'>
        <Link to='/' className='btn btn-danger my-3 text-center'>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default Person;
