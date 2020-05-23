import React, {Component} from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation.js';
import Data from './Components/Data/Data';
import Loading from './Components/Loading/Loading';
import News from './Components/News/News';

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
      this.setState({
        route:'loading'
      })
      fetch('https://20980.wayscript.io/news')
      .then((res)=>res.json())
      .then((news)=>{
        this.setState({
          newsTitle:news,
          route:'news'
        })
        
      })
    }
    
  render(){
    const { recovered, active, death, newsTitle, route} = this.state;
    return (
      <div>
        <Navigation buttonClick={this.buttonClick}
         getNews={this.getNews} />

        <main className='content'>        
          {route==='data'
            ?<Data active={active}
            recovered={recovered}
              death={death} />
            :(
            route==='loading'
              ?<Loading />
            
              :<News newsTitle={newsTitle} />
              
            )
          }
        </main>
      </div>
    );
  }
}

export default App;
