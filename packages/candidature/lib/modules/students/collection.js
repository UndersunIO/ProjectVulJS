/*
This is the main Candidacies collection definition file.
A collection in VulcanJS = a model, a type of data, like posts, comments, or users.  
*/

import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';

// Candidacies collection definition

const Candidacies = createCollection({
  collectionName: 'Candidacies',
  typeName: 'Candidacy',
  schema,

  permissions: {
    canRead: ['admins'],
    canCreate: ['guests'],
    canUpdate: ['admins'],
    canDelete: ['admins'],
  },

  defaultInput: {
    orderBy: {
      createdAt: 'desc',
    },
  },
 
});

export default Candidacies;
