import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../css/bootstrap.min.css';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import PersonList from './Person/PersonList';
import Person from './Person/Person';

const App = () => {
  const database = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      age: '30',
      phone: '111-222-333',
      gender: 'Male',
      city: 'New Delphi',
      country: 'India',
    },

    {
      id: 2,
      name: 'Jane',
      surname: 'Doe',
      age: '25',
      phone: '333-212-456',
      gender: 'Female',
      city: 'Paris',
      country: 'France',
    },

    {
      id: 3,
      name: 'Ken',
      surname: 'Bert',
      age: '33',
      phone: '142-678-213',
      gender: 'Male',
      city: 'Berlin',
      country: 'Germany',
    },

    {
      id: 4,
      name: 'Sue',
      surname: 'Monroe',
      age: '58',
      phone: '743-123-754',
      gender: 'Female',
      city: 'New York',
      country: 'USA',
    },

    {
      id: 5,
      name: 'William',
      surname: 'Henterfoth',
      age: '63',
      phone: '876-543-123',
      gender: 'Male',
      city: 'Los Angeles',
      country: 'USA',
    },

    {
      id: 6,
      name: 'Jacob',
      surname: 'Vente',
      age: '16',
      phone: '865-434-321',
      gender: 'Male',
      city: 'Warsaw',
      country: 'Poland',
    },

    {
      id: 7,
      name: 'Dave',
      surname: 'Porto',
      age: '41',
      phone: '323-654-321',
      gender: 'Male',
      city: 'Pekin',
      country: 'China',
    },

    {
      id: 8,
      name: 'Roman',
      surname: 'Tente',
      age: '16',
      phone: '564-123-326',
      gender: 'Male',
      city: 'Tokio',
      country: 'Japan',
    },
  ];

  const [singlePersonData, setSinglePersonData] = useState({});

  return (
    <Router>
      <Fragment>
        <Header title='PhoneBook' />
        <div className='container'>
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <PersonList data={database} setPerson={setSinglePersonData} />
                </Fragment>
              )}
            />

            <Route
              exact
              path='/person/:id'
              render={(props) => (
                <Fragment>
                  <Person data={singlePersonData} />
                </Fragment>
              )}
            />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    </Router>
  );
};

export default App;
