import React from 'react';
import setUpTags from '../../utils/setUpTags';

const TagsList = ({recipes}) => {
  setUpTags(recipes)
  return <div>Tags List</div>;
};

export default TagsList;
