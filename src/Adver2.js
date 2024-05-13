import React, { Component } from 'react'
import a from './images/about-1.jpg';
import b from './images/about-2.jpg';
import c from './images/about-3.jpg';
import d from './images/about-4.jpg';

export default class Adver2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      c: 0
    }
  }
  abc = () => {
    this.setState({ x: this.state.x + 5 })
    this.setState({ c: this.state.c + 10 })

  }

  componentDidMount() {

    setTimeout(this.abc, 1000);

    setTimeout(this.abc, 2000);

    setTimeout(this.abc, 3000);

    setTimeout(this.abc, 4000);

    setTimeout(this.abc, 5000);

  }
  render() {
    return (
      <>
        <div className='content1'>
          <div className='div1'>
            <div className='div3'>
              <div className='div4'>
                <img src={a} height={360} width={335} style={{ marginLeft: "20px", marginTop: "20px" }} className='big' />
              </div>

              <div className='div5'>
                <img src={b} height={260} width={245} style={{ marginTop: "120px" }} className='big' />
              </div>
            </div>

            <div className='div6'>
              <div className='div7'>
                <img src={c} height={260} width={245} style={{ marginLeft: "110px" }} className='big' />
              </div>

              <div className='div8'>
                <img src={d} height={360} width={335} style={{ marginTop: "3px", marginRight: "20px" }} className='big' />
              </div>
            </div>
          </div>



          <div className='div2'>
            <div className='info1'>
              <h4 className='t1' style={{ color: "orange", marginTop: "100px" }}>About us-------</h4>
              <h1>Welcome to <i className='fas fa-hamburger' style={{ color: "orange" }} /> Restoran</h1>
              <h5>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.<br /><br />

                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</h5>
            </div>
            <div className='info2'>
              <span style={{ borderLeft: "10px solid orange", fontSize: "40px", color: "orange", paddingLeft: "10px" }}><b>{this.state.x}</b></span><span style={{ fontSize: "20px", paddingLeft: "20px", position: "relative", bottom: "20px", }}>&nbsp;&nbsp;Years of<br /> <b style={{ paddingLeft: "80px", fontSize: "25px", position: "relative", bottom: "20px", fontWeight: "bolder" }}>EXPERIENCE</b></span><br /><br />
              <button className="btn btn-warning" style={{ textAlign: "center", color: "white", marginTop: "15px", fontSize: "25px" }}>READ MORE</button>
            </div>
            <div className='info3'>
              <span style={{ borderLeft: "10px solid orange", fontSize: "40px", color: "orange", paddingLeft: "10px", }}><b>{this.state.c}</b></span><span style={{ fontSize: "20px", paddingLeft: "20px", position: "relative", bottom: "20px" }}>&nbsp;&nbsp;Popular <br /> <b style={{ paddingLeft: "80px", fontSize: "25px", position: "relative", bottom: "20px", fontWeight: "bolder" }}>MASTER CHEFS</b></span>
            </div>
          </div>
        </div>
      </>
    )
  }
}
