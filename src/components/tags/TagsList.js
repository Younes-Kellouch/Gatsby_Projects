import { Link } from 'gatsby';
import React from 'react';
import setUpTags from '../../utils/setUpTags';

const TagsList = ({recipes}) => {
  const newTags=setUpTags(recipes)
  console.log(newTags)
  return <div className='tag-container'>
    <h4>recipes</h4>
    <div className="tags-list">
      {newTags.map((tag,index)=>{
        const [text,nbr]=tag
        return <Link to={`/${text}`} key={index}>{text} ({nbr})</Link>
      })}
    </div>
  </div>;
};

export default TagsList;
