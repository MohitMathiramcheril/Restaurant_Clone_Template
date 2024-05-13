
// import React, { useState } from 'react';

// export default function Card(props) {
//     const[l,lik]=useState(0)
//     const[l1,lik1]=useState(0)
//     const[l2,lik2]=useState(0)
//     const[l3,lik3]=useState(0)
//     const[d,dik]=useState(0)
//     const[d1,dik1]=useState(0)
//     const[d2,dik2]=useState(0)
//     const[d3,dik3]=useState(0)
//     const abc=()=>{
//         lik(l+1);
//     }
//     const abc1=()=>{
//         lik1(l1+1);
//     }
//     const abc2=()=>{
//         lik2(l2+1);
//     }
//     const abc3=()=>{
//         lik3(l3+1);
//     }
//     const xyz=()=>{
//         dik(d+1);
//     }
//     const xyz1=()=>{
//         dik1(d1+1);
//     }
//     const xyz2=()=>{
//         dik2(d2+1);
//     }
//     const xyz3=()=>{
//         dik3(d3+1);
//     }

//   return (
//     <>
//         <div className='c1'>
//         <div className="flex1">
// <div style={{marginTop:"60px"}}>
// <i className="fa fa-user-secret" style={{paddingLeft:"10px",fontSize:"80px",marginTop:"50px",marginLeft:"15px"}} />
//     <h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"25px",marginLeft:"15px"}}><b>{props.d1}</b></h1>
//     <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"18px",marginLeft:"15px"}}>{props.d2}</p>
//     <i className="fa fa-thumbs-up" aria-hidden="true" style={{paddingLeft:"10px",position:"absolute"}} onClick={abc}></i><span style={{paddingLeft:"30px"}}>{l}</span>
//     <i className="fas fa-thumbs-down" style={{paddingLeft:"190px",position:"absolute"}} onClick={xyz}></i><span style={{paddingLeft:"220px"}}>{d}</span>
// </div>

// <div style={{marginTop:"60px"}}>
// <i className='fas fa-hamburger' style={{paddingLeft:"10px",fontSize:"80px",marginTop:"50px",marginLeft:"15px"}} />
//     <h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"25px",marginLeft:"15px"}}><b>{props.d3}</b></h1>
//     <p style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"18px",marginLeft:"15px"}}>{props.d2}</p>
//     <i className="fa fa-thumbs-up" aria-hidden="true" style={{paddingLeft:"10px",position:"absolute"}} onClick={abc1}></i><span style={{paddingLeft:"30px"}}>{l1}</span>
//     <i className="fas fa-thumbs-down" style={{paddingLeft:"190px",position:"absolute"}} onClick={xyz1}></i><span style={{paddingLeft:"220px"}}>{d1}</span>
// </div>

// <div style={{marginTop:"60px"}}>
// <i className="fa fa-cart-plus" style={{paddingLeft:"10px",fontSize:"80px",marginTop:"50px",marginLeft:"15px"}} />
//     <h1 style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"25px",marginLeft:"15px"}}><b>{props.d4}</b></h1>
//     <p style={{ fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"18px",marginLeft:"15px"}}>{props.d2}</p>
//     <i className="fa fa-thumbs-up" aria-hidden="true" style={{paddingLeft:"10px",position:"absolute"}} onClick={abc2}></i><span style={{paddingLeft:"30px"}}>{l2}</span>
//     <i className="fas fa-thumbs-down" style={{paddingLeft:"190px",position:"absolute"}} onClick={xyz2}></i><span style={{paddingLeft:"220px"}}>{d2}</span>
// </div>

// <div style={{marginTop:"60px"}}>
// <i className="fa fa-comments" style={{paddingLeft:"10px",fontSize:"80px",marginTop:"50px",marginLeft:"15px"}} />
//     <h1 style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"25px",marginLeft:"15px"}}><b>{props.d5}</b></h1>
//     <p style={{fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",marginTop: "5px", fontSize:"18px",marginLeft:"15px"}}>{props.d2}</p>
//     <i className="fa fa-thumbs-up" aria-hidden="true" style={{paddingLeft:"10px",position:"absolute"}} onClick={abc3}></i><span style={{paddingLeft:"30px"}}>{l3}</span>
//     <i className="fas fa-thumbs-down" style={{paddingLeft:"190px",position:"absolute"}} onClick={xyz3}></i><span style={{paddingLeft:"220px"}}>{d3}</span>
// </div>

//     </div>
//         </div>
//     </>
//   )
// }
import React from "react";
import { useState } from "react";
export default function Flex() {
  const [l, lik] = useState(0);
  const [l1, lik1] = useState(0);
  const [l2, lik2] = useState(0);
  const [l3, lik3] = useState(0);
  const [d, dik] = useState(0);
  const [d1, dik1] = useState(0);
  const [d2, dik2] = useState(0);
  const [d3, dik3] = useState(0);
  const abc = () => {
    lik(l + 1);
  };
  const abc1 = () => {
    lik1(l1 + 1);
  };
  const abc2 = () => {
    lik2(l2 + 1);
  };
  const abc3 = () => {
    lik3(l3 + 1);
  };
  const xyz = () => {
    dik(d + 1);
  };
  const xyz1 = () => {
    dik1(d1 + 1);
  };
  const xyz2 = () => {
    dik2(d2 + 1);
  };
  const xyz3 = () => {
    dik3(d3 + 1);
  };
  const [a1, f1] = useState('fa fa-user-secret');
  const [a2, f2] = useState('Master Chefs');
  const [a3, f3] = useState(' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet')
  const [a4, f4] = useState('fas fa-hamburger')
  const [a5, f5] = useState('Quality Food')
  const [a6, f6] = useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet')
  const [a7, f7] = useState('fa fa-cart-plus')
  const [a8, f8] = useState('Online Order');
  const [a9, f9] = useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet')
  const [a10, f10] = useState('fa fa-comments')
  const [a11, f11] = useState('24/7 Service');
  const [a12, f12] = useState('Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet')
  const changenew1 = () => {
    f1("fa-solid fa-pizza-slice");
    f2("Fantastic Chef's");
    f3("Keep it easy with these simple but delicious recipes.");
  }
  const changenew2 = () => {
    f4('fa-solid fa-ranking-star');
    f5('Best Foods')
    f6('Keep it easy with these simple but delicious recipes')
  }
  const changenew3 = () => {
    f7('fa-solid fa-truck-fast')
    f8('Fast Deliverys');
    f9('Keep it easy with these simple but delicious recipes')
  }
  const changenew4 = () => {
    f10('fa-solid fa-globe')
    f11('World-Wide');
    f12('Keep it easy with these simple but delicious recipes')
  }
  const changeold1 = () => {
    f1("fa fa-user-secret");
    f2('Master Chefs');
    f3(' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam');
  }
  const changeold2 = () => {
    f4('fas fa-hamburger');
    f5('Quality Food')
    f6(' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam');
  }
  const changeold3 = () => {
    f7('fa fa-cart-plus');
    f8('Online Order')
    f9(' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam');
  }
  const changeold4 = () => {
    f10('fa fa-comments');
    f11('24/7 Service')
    f12(' Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam');
  }
  return (
    <>
      <div className="c1">
        <div className="flex1">
          <div style={{ marginTop: "60px" }} onMouseOver={changenew1} onMouseLeave={changeold1}>
            <i
              className={a1}
              style={{
                paddingLeft: "10px",
                fontSize: "80px",
                marginTop: "50px",
                marginLeft: "15px",
              }}
            />
            <h1
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "25px",
                marginLeft: "15px",
              }}
            >
              <b>{a2}</b>
            </h1>
            <p
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "18px",
                marginLeft: "15px",
              }}
            >
              {a3}
            </p>
            <i
              className="fa fa-thumbs-up"
              aria-hidden="true"
              style={{ paddingLeft: "10px", position: "absolute" }}
              onClick={abc}
            ></i>
            <span style={{ paddingLeft: "30px" }}>{l}</span>
            <i
              className="fas fa-thumbs-down"
              style={{ paddingLeft: "190px", position: "absolute" }}
              onClick={xyz}
            ></i>
            <span style={{ paddingLeft: "220px" }}>{d}</span>
          </div>

          <div style={{ marginTop: "60px" }} onMouseOver={changenew2} onMouseLeave={changeold2}>
            <i
              className={a4}
              style={{
                paddingLeft: "10px",
                fontSize: "80px",
                marginTop: "50px",
                marginLeft: "15px",
              }}
            />
            <h1
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "25px",
                marginLeft: "15px",
              }}
            >
              <b>{a5}</b>
            </h1>
            <p
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "18px",
                marginLeft: "15px",
              }}
            >
              {a6}
            </p>
            <i
              className="fa fa-thumbs-up"
              aria-hidden="true"
              style={{ paddingLeft: "10px", position: "absolute" }}
              onClick={abc1}
            ></i>
            <span style={{ paddingLeft: "30px" }}>{l1}</span>
            <i
              className="fas fa-thumbs-down"
              style={{ paddingLeft: "190px", position: "absolute" }}
              onClick={xyz1}
            ></i>
            <span style={{ paddingLeft: "220px" }}>{d1}</span>
          </div>

          <div style={{ marginTop: "60px" }} onMouseOver={changenew3} onMouseLeave={changeold3}>
            <i
              className={a7}
              style={{
                paddingLeft: "10px",
                fontSize: "80px",
                marginTop: "50px",
                marginLeft: "15px",
              }}
            />
            <h1
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "25px",
                marginLeft: "15px",
              }}
            >
              <b>{a8}</b>
            </h1>
            <p
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "18px",
                marginLeft: "15px",
              }}
            >
              {a9}
            </p>
            <i
              className="fa fa-thumbs-up"
              aria-hidden="true"
              style={{ paddingLeft: "10px", position: "absolute" }}
              onClick={abc2}
            ></i>
            <span style={{ paddingLeft: "30px" }}>{l2}</span>
            <i
              className="fas fa-thumbs-down"
              style={{ paddingLeft: "190px", position: "absolute" }}
              onClick={xyz2}
            ></i>
            <span style={{ paddingLeft: "220px" }}>{d2}</span>
          </div>

          <div style={{ marginTop: "60px" }} onMouseOver={changenew4} onMouseLeave={changeold4}>
            <i
              className={a10}
              style={{
                paddingLeft: "10px",
                fontSize: "80px",
                marginTop: "50px",
                marginLeft: "15px",
              }}
            />
            <h1
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "25px",
                marginLeft: "15px",
              }}
            >
              <b>{a11}</b>
            </h1>
            <p
              style={{
                fontFamily:
                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                marginTop: "5px",
                fontSize: "18px",
                marginLeft: "15px",
              }}
            >
              {a12}
            </p>
            <i
              className="fa fa-thumbs-up"
              aria-hidden="true"
              style={{ paddingLeft: "10px", position: "absolute" }}
              onClick={abc3}
            ></i>
            <span style={{ paddingLeft: "30px" }}>{l3}</span>
            <i
              className="fas fa-thumbs-down"
              style={{ paddingLeft: "190px", position: "absolute" }}
              onClick={xyz3}
            ></i>
            <span style={{ paddingLeft: "220px" }}>{d3}</span>
          </div>
        </div>
      </div>
    </>
  );
}
