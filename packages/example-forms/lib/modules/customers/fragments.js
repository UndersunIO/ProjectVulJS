import { registerFragment } from '../../../../candidature/lib/components/movies/node_modules/meteor/vulcan:core';

registerFragment(`
  fragment customerFragment on Customer {
    _id
    stage
    name
    notes
    meetingDate
    
  }
`);