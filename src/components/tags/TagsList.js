import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import setUpTags from '../../utils/setUpTags';

const TagsList = ({recipes}) => {
  const newTags=setUpTags(recipes)
  console.log(newTags)
  return <div className='tag-container'>
    <h4>recipes</h4>
    <div className="tags-list">
      {newTags.map((tag,index)=>{
        const [text,nbr]=tag
        const tagSlug = slugify(text, { lower: true })

        return <Link to={`/tags/${tagSlug}`} key={index}>{text} ({nbr})</Link>
      })}
    </div>
  </div>;
};

export default TagsList;
