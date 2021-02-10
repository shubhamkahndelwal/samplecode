import React from 'react';
import test from './test.json';
class App extends React.Component{
  constructor(prop){
    super(prop);
    this.state={
      toggle: true,
    }
    this.handleClick = this.handleClick.bind(this);
  }
 handleClick(e){
   console.log(e.target.id);
   if (e.target.id) {
     this.setState(state=>({
       toggle: !state.toggle
     }))
   }

  }
  render(){
    console.log(test);
    return(
      <div style={{display:'flex'}} >
        {
          test.name.map((itm,index)=>{
            console.log(itm);
          return(
            <div style={{height:'auto',width:'30%',border:'1px solid black',display:'block'}}>
            <div>Title: {itm.title}</div>
            <div>ID: {itm.id}</div>
            <div>URL: {itm.url}</div>
            <div>ThumbnailUrl : {itm.thumbnailUrl}</div>
            <div ><button id={itm.id} onClick={(e)=>this.handleClick(e)}>{this.state.toggle ? 'COMPARE':'REMOVE'}</button></div>
            </div>
          )
        })
      }
      </div>
    );
  }
}

export default App;
