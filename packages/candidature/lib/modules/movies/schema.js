/*

modules/movies/schema.js - #tutorial-step-10 -
This is a JS object that defines every property of a collection document...

A SimpleSchema-compatible JSON schema

*/

const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: () => {
      return new Date();
    },
  },
 
  

  // custom properties

  name: {
    label: 'Name',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },

  lastname: {
    label: 'Lastname',
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
  },

  age: {
    label: 'Age',
    type: Number,
    optional: true,
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['members'],
    min: 1,
    max: 100,
  },

  isSelected: {
    label: 'Selected?',
    type: Boolean,
    optional: true,
    canRead: ['members'],
    canCreate: ['admin'],
    canUpdate: ['members'],
    
    
  },

};

export default schema;
