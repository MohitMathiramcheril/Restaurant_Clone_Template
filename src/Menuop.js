import React, { Component } from 'react'

export default class Menuop extends Component {
  render() {
    return (
      <>
        <div className='menu1'>
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center fw-normal" style={{color:"orange"}}>----Food Menu----</h5>
                    <h1 className="mb-5" style={{fontWeight:"bolder"}}>Most Popular Items</h1>
                </div>
                <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
                    <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill">
                                <i className="fa fa-coffee fa-2x" style={{color:"orange"}}></i>
                                <div className="ps-3">
                                    <small className="text-body">Popular</small>
                                    <h6 className="mt-n1 mb-0" style={{fontWeight:"bolder",color:"black"}}>Breakfast</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill">
                                <i className="fa fa-hamburger fa-2x" style={{color:"orange"}}></i>
                                <div className="ps-3">
                                    <small className="text-body">Special</small>
                                    <h6 className="mt-n1 mb-0" style={{fontWeight:"bolder",color:"black"}}>Launch</h6>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" >
                                <i className="fa fa-utensils fa-2x" style={{color:"orange"}}></i>
                                <div className="ps-3">
                                    <small className="text-body">Lovely</small>
                                    <h6 className="mt-n1 mb-0" style={{fontWeight:"bolder",color:"black"}}>Dinner</h6>
                                </div>
                            </a>
                        </li>
                    </ul>
        </div>
        </div>
        </div>
      </>
    )
  }
}
