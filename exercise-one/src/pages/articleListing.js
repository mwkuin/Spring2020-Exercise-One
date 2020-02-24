import React from 'react';

import ArticleCard from '../components/articleCard';

import Data from "../components/data";

function ArticleListing() {
  console.log('data', Data);
  return (
    <div class="articleListing">
      <header>
        <h1>Article</h1>
      </header>
      <main>
        {Data.map((article, i) => (
          <ArticleCard
            key={i}
            articleData={article}
          />
        ))}
      </main>
    </div>

  );
}

export default ArticleListing;
