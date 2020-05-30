import React from 'react';

const News = ({newsTitle}) => {
    return(
        <div>
                <div id='global-news' className='news-box'><h2>Global News</h2>
                  <ul>{newsTitle.global_news.map(news=>{
                    return (
                      <li key={news}>{news}</li>
                    )
                  })}
                  </ul>
                </div>
                <hr/>
                <div id='local-news' className='news-box'><h2>Local News</h2>
                  <ul>{newsTitle.local_news.map(news=>{
                    return (
                      <li key={news}>{news}</li>
                    )
                  })}
                  </ul>
                </div>
                <hr/>
                <div id='political-news' className='news-box'><h2>Political News</h2>
                  <ul>{newsTitle.political_news.map(news=>{
                    return (
                      <li key={news}>{news}</li>
                    )
                  })}
                  </ul>
                </div>
            </div>
    )
}

export default News;