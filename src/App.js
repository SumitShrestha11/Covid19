import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      recovered:'',
      active:'',
      death:'',
      newsTitle:[],
      route:'data'  
    }
  }
  componentDidMount(){
    fetch('https://data.nepalcorona.info/api/v1/covid/summary')
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({
          recovered:data.current_state[1].count,
          active:data.current_state[2].count,
          death:data.current_state[0].count
        })

    })

  }
  buttonClick=()=>{
    fetch('https://data.nepalcorona.info/api/v1/covid/summary')
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({
          recovered:data.current_state[1].count,
          active:data.current_state[2].count,
          death:data.current_state[0].count,
          route:'data'
        })
        //console.log(this.state.recovered,this.state.active);
    })
    }


    getNews=()=>{
      fetch('http://localhost:5000/news')
      .then((res)=>res.json())
      .then((news)=>{
        this.setState({
          newsTitle:news,
          route:'news'
        })
        
      })
    }
    
  render(){
    return (
      <div>
        <button 
          id='getData'
          onClick={this.buttonClick}
        >Get Data</button>
        <button id='getNews'
          onClick={this.getNews}
        >Get News</button>
        {this.state.route==='data'
          ?<div>
              <ul>
                <li>Total Cases: {this.state.active+this.state.recovered+this.state.death}</li>
                <li>Active Cases: {this.state.active}</li>
                <li>Recovered Cases: {this.state.recovered}</li>
                <li>Deaths: {this.state.death}</li>
              </ul>
            </div>
          :<div>
              <div><h2>Global News</h2>
                <ul>{this.state.newsTitle.global_news.map(news=>{
                  return (
                    <li key={news}>{news}</li>
                  )
                })}
                </ul>
              </div>
              <div><h2>Local News</h2>
                <ul>{this.state.newsTitle.local_news.map(news=>{
                  return (
                    <li key={news}>{news}</li>
                  )
                })}
                </ul>
              </div>
              <div><h2>Political News</h2>
                <ul>{this.state.newsTitle.political_news.map(news=>{
                  return (
                    <li key={news}>{news}</li>
                  )
                })}
                </ul>
              </div>
           </div>
        }
      </div>
    );
  }
}

export default App;
