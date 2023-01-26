import React from 'react'
import "./featuredArticleListItem.scss";

function FeaturedArticleListItem({item}) {
  return (
    <div className="featuredArticleListItem">
        <div className="item__img">
            <img src={item?.urlToImage} alt="" />
        </div>
        <div className="item__info">
            <p className='item__date'>{item?.publishedAt.split("T")[0]}</p>
            <a className='item__desc'>{item?.title}</a>
        </div>
    </div>
  )
}

export default FeaturedArticleListItem
