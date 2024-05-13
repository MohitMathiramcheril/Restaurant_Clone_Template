import React, { Component } from 'react'

export default class Menuitem extends Component {
    constructor()
    {
          super();
          this.state={
            c1:"Chicken Burger",
            c2:require("./images/menu-1.jpg"),
            c3:"Noodles",
            c4:require("./images/menu-2.jpg"),
            c5:"Chicken Burger",
            c6:require("./images/menu-1.jpg"),
            c7:"Chicken Burger",
            c8:require("./images/menu-1.jpg"),
            c9:"Chicken Burger",
            c10:require("./images/menu-1.jpg"),
            c11:"Noodles",
            c12:require("./images/menu-2.jpg"),
            c13:"Chicken Burger",
            c14:require("./images/menu-1.jpg"),
            c15:"Chicken Burger",
            c16:require("./images/menu-1.jpg"),
            c17:"$115",
            c18:"$115",
            c19:"$115",
            c20:"$115",
            c21:"$115",
            c22:"$115",
            c23:"$115",
            c24:"$115"

           
          }
    }
    abc=()=>{
        this.setState({c1:'Pizza'})
        this.setState({c2:require("./images/burger3.png")})
        this.setState({c17:'$120'})
    
    }
    abc1=()=>{
        this.setState({c3:'Pasta'})
        this.setState({c4:require("./images/pasta.jpg")})
        this.setState({c18:'$200'})
    }
    abc2=()=>{
        this.setState({c5:'Salad'})
        this.setState({c6:require("./images/salad2.png")})
        this.setState({c19:'$300'})
    }
    abc3=()=>{
        this.setState({c7:'SaMosa'})
        this.setState({c8:require("./images/samosa2.png")})
        this.setState({c20:'$250'})
    }
    abc4=()=>{
        this.setState({c9:'Pizza'})
        this.setState({c10:require("./images/burger3.png")})
        this.setState({c21:'$120'})
    
    }
    abc5=()=>{
        this.setState({c11:'Pasta'})
        this.setState({c12:require("./images/pasta.jpg")})
        this.setState({c22:'$200'})
    }
    abc6=()=>{
        this.setState({c13:'Salad'})
        this.setState({c14:require("./images/salad2.png")})
        this.setState({c23:'$300'})
    }
    abc7=()=>{
        this.setState({c15:'SaMosa'})
        this.setState({c16:require("./images/samosa2.png")})
        this.setState({c24:'$350'})
    }

  render() {
    return (
      <>
         <div className="tab-content">
                        <div id="tab-1" className="tab-pane fade show p-0 active">
                            <div className="row g-4">
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c2} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{this.state.c1}</span>
                                                <button className='btn btn-warning text-light' onClick={this.abc}>{this.state.c17}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c4} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{this.state.c3}</span>
                                                <button className='btn btn-warning text-light' onClick={this.abc1}>{this.state.c18}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c6} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                            <span>{this.state.c5}</span>
                                            <button className='btn btn-warning text-light' onClick={this.abc2}>{this.state.c19}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c8} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{this.state.c7}</span>
                                                <button className='btn btn-warning text-light' onClick={this.abc3}>{this.state.c20}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c10} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>{this.state.c9}</span>
                                                <button className='btn btn-warning text-light' onClick={this.abc4}>{this.state.c21}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c12} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                            <span>{this.state.c11}</span>
                                            <button className='btn btn-warning text-light' onClick={this.abc5}>{this.state.c22}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c14} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                            <span>{this.state.c13}</span>
                                            <button className='btn btn-warning text-light' onClick={this.abc6}>{this.state.c23}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src={this.state.c16} alt="" style={{width:"80px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                            <span>{this.state.c13}</span>
                                            <button className='btn btn-warning text-light' onClick={this.abc7}>{this.state.c24}</button>
                                            </h5>
                                            <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
      </>
    )
  }
}
