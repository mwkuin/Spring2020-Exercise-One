import React, {useEffect, useState} from 'react'; //calling 2 function from react (called hooks)
import {useParams} from "react-router-dom";

import DATA from "../components/data";
import ArticleItem from "../components/ArticleItem.js";

function Article() {
  const [article, setArticle] = useState({});
  let { id } = useParams(); //id is defined by the url

  useEffect(() => { //everytime id updates we fire this code
    let dataArray = DATA.filter(article => article.id === id); //filtering data from our json file

    setArticle(dataArray[0]) //setting the data

  }, [id])


  return (
    <div>
      <header
        className="articleHeader"
        style={{
        backgroundImage: `url(${article.image ? article.image.url: ''})`
        }}
      >
      <div className="articleHeaderWrapper">
        <h1>{article.title}</h1>
        <p>{article.publishedDate}</p>
        <p>{article.blurb}</p>
      </div>
      </header>

      <main className="articleContent">
        <div className="articleContentWrapper">
          {article.articleText &&
            article.articleText.map((text, i) => (
              <ArticleItem key={i} data={text.data} type={text.type}/>
          ))}
        </div>
      </main>

    </div>
  );
}

export default Article;
