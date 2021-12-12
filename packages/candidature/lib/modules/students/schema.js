/*
This is a JS object that defines every property of a collection document...
A SimpleSchema-compatible JSON schema
*/
const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['admins'],
  },
  
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['admins'],
    onCreate: () => {
      return new Date();
    },
  },
 
  // custom properties

  name: {
    label: 'Prénom',
    type: String,
    optional: false,
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['admins'],
  },

  lastname: {
    label: 'Nom',
    type: String,
    optional: false,
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['admins'],
  },

  age: {
    label: 'Age',
    type: Number,
    optional: false,
    canRead: ['members'],
    canCreate: ['members'],
    canUpdate: ['admins'],
    min: 1,
    max: 120,
  },

  isSelected: {
    label: 'Selected?',
    type: Boolean,
    optional: true,
    canRead: ['admins'],
    canUpdate: ['admins'],
  },

};

export default schema;
