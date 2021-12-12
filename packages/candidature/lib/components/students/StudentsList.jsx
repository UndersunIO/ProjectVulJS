/* 

- 
The component for our list of candidacies, which we called in to modules/routes.js.

Wrapped with the "withList" and "withCurrentUser" containers.

*/

import React from 'react';
import { Helmet } from 'react-helmet';
import { Components, withMulti, withCurrentUser, registerComponent } from 'meteor/vulcan:core';
import Users from 'meteor/vulcan:users';

import Candidacies from '../../modules/students/collection.js';

const StudentsList = ({ results = [], currentUser, loading}) => (
  <div style={{ maxWidth: '500px', margin: '20px auto' }}>
   
    <Helmet>
      <link
        name="bootstrap"
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
      />
    </Helmet>

    {/* user accounts */}

    <div
      style={{
        padding: '20px 0',
        marginBottom: '20px',
        borderBottom: '1px solid blue',
      }}
    >
      
      <Components.AccountsLoginForm />
    </div>

    {loading ? (
      <Components.Loading />
    ) : (
      <div>

        {Users.canCreate({ collection: Candidacies, user: currentUser }) ? (
          <div
            style={{
              marginBottom: '20px',
              paddingBottom: '30px',
              paddingTop: '5px',
              borderBottom: '1px solid blue',
            }}
          >
            <h4>Candidature</h4>
            <Components.SmartForm collection={Candidacies} />
          </div>
        ) : null}     
      </div>
    )}
  </div>
);

// ...this is where we specify how to load the data in the options object that we pass to withList
// if you want, you can specify many more options here, like how often to look for data or what fields to query from, filtering and sorting options. ...
const options = {
  collection: Candidacies,
  limit: 5,
};

// These two functions (withList & withCurrentUser) are Higher Order Components (HOC) and by wrapping our component with this we can give it "props". (See the "props" section at the top.)
registerComponent({ name: 'StudentsList', component: StudentsList, hocs: [withCurrentUser, [withMulti, options]] });

