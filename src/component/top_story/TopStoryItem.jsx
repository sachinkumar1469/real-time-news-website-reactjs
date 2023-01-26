import React from 'react';
import './topStoryItem.scss';

function TopStoryItem({item}) {
  return (
    <div className='topStoryItem'>
      <div className="item_img">
        <img src={item?.urlToImage} alt="" />
      </div>
      <p className='item__date'>{item?.publishedAt.split("T")[0]}</p>
      <a href={item.url} target="_blank">{item?.title}</a>
      <p className='item__desc'>{item?.description}</p>
    </div>
  )
}

export default TopStoryItem
