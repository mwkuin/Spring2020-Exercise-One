import React from 'react';

function ArticleCard({articleData}) {

  return (
    <article className="articleCard">
      <div className="articleCard__image">
        <img src={articleData.image.url} alt={articleData.image.alt} />

      </div>

      <div className="articleCard__text">
        <h2>{articleData.title}</h2>
        <p>date</p>
        <p>{articleData.blurb}</p>
        <a href={`article/${articleData.id}`}>Read More </a>
      </div>
    </article>

  );
}

export default ArticleCard;
