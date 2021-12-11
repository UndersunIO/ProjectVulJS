import { registerFragment } from 'meteor/vulcan:core';

registerFragment(/* GraphQL */`
  fragment MovieFragment on Movie {
    _id
    createdAt
    name
    isWatched

    #  #Step10
    user{
      displayName
    }

    # #Step11
     score
    
  }
`);