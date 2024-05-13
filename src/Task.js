import React, { Component } from 'react'

export default class Task extends Component {
    constructor()
    {
        super()
        this.state={
            c:0
        }
    }

    abc=()=>
    {
      
        this.setState({c:this.state.c+1})
      
    }

    componentDidMount()
    {
        
        setTimeout(this.abc,1000);
                
        setTimeout(this.abc,2000);
                
        setTimeout(this.abc,3000);
        
        setTimeout(this.abc,4000);


       

        
    }

   
  render() {
    return (
      <div>
        <h1>{this.state.c}</h1>
      
      </div>
    )
  }
}
