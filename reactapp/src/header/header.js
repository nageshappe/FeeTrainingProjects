import React, {Component} from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.state={seconds:0}
    } 
    render(){
  return (
      <div align="center"><h1>Counting Machine</h1>
      <h2> Sceonds:{this.state.seconds}</h2>
      </div>

    );
    }    

    incrementCounter()
    {
        this.setState((prevState,props) =>{return {seconds:prevState +10}});
    }
  
    componentDidMount(){
        this.timerID =  setInterval( () => this.incrementCounter(), 1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }
}


export default Header;