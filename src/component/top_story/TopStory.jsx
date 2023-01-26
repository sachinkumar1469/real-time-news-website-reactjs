import React from 'react';
import "./topStory.scss";

import TopStoryItem from './TopStoryItem';

function TopStory({newsData}) {
  const data = newsData.slice(4);
  return (
    <div className='topStory'>
      <h2>Top Story</h2>

      <div className="topstory_content">
        {data.map(itemData=><TopStoryItem item={itemData}/>)}
      </div>
    </div>
  )
}

export default TopStory
