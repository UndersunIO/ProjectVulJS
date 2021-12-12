/*
Customers
*/

import { createCollection } from '../../../../candidature/lib/components/movies/node_modules/meteor/vulcan:core'
import schema from './schema.js'
import './fragments'

const Customers = createCollection({

  collectionName: 'Customers',

  typeName: 'Customer',

  schema,

  permissions: {
    canRead: ['guests'],
    canCreate: ['members'],
    canUpdate: ['owners'],
    canDelete: ['owners']
  },

});

export default Customers;
