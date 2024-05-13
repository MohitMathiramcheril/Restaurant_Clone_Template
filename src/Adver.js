
import React from 'react';
import "./Style.css";
import x from './images/hero.png';

export default function Adver(props) {
  return (
    <>
       <div id='content'>
        <div className='subcontent'>
         <div className='d1'>
        <h1 className='slider' style={{marginTop:"30%",paddingLeft:"20px"}}><b>{props.w1}</b></h1>
           <h1 className='slider' style={{paddingLeft:"20px"}}><b>{props.w2}</b></h1>
          <p className='slider' style={{paddingLeft:"20px"}}><b>{props.w3}<br/>{props.w4}</b></p>
          <button id='slider1'   className='btn btn-warning' style={{marginLeft:"20px",color:"white"}}>{props.w5}</button>
         </div>
        <div className='d2'>
<img className='img1' src={x} height={600} width={600} style={{marginLeft:"100px",marginTop:"80px"}}/>
        </div>
        </div>
      </div>
    </>
  )
}
