import { Link } from "react-router-dom";
import "./Style.css";
export default function Header() {
  return (
    <>
      <div className="a1">
        <div className="nav1">
          <i
            className="fa-solid fa-utensils"
            style={{ color: "orange", paddingLeft: "10px", fontSize: "40px" }}
          />
          <span style={{ paddingLeft: "30px", fontSize: "30px" }}>
            <b>Restoran</b>
          </span>
        </div>
        <div className="nav2"></div>
        <div className="nav3">
          <h5
            style={{ textAlign: "center", paddingTop: "12px", color: "white" }}
          >
            <span className="span1" to="/Home">
              HOME
            </span>
          </h5>
          {/* <h5 style={{textAlign:"center",paddingTop: "12px"}}><Link to="/Home"><span className="span1">HOME</span></Link></h5> */}
        </div>
        <div className="nav4">
          <h5 style={{ textAlign: "center", paddingTop: "12px" }}>
            <span className="span1" to="/About">
              ABOUT
            </span>
          </h5>
          {/* <Link to="/About"><h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">ABOUT</span></h5></Link> */}
        </div>
        <div className="nav5">
          <h5 style={{ textAlign: "center", paddingTop: "12px" }}>
            <span className="span1">SERVICES</span>
          </h5>
          {/* <Link to="/Services"><h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">SERVICES</span></h5></Link> */}
        </div>
        <div className="nav6">
          <h5 style={{ textAlign: "center", paddingTop: "12px" }}>
            <span className="span1">MENU</span>
          </h5>
        </div>
        <div className="nav7">
          <h5 style={{ textAlign: "center", paddingTop: "12px" }}>
            <span className="span1">PAGES</span>
          </h5>
        </div>
        <div className="nav8">
          {/* <Link to="/Contact"><h5 style={{textAlign:"center",paddingTop: "12px",}}><span className="span1">CONTACT</span></h5></Link> */}
          <h5 style={{ textAlign: "center", paddingTop: "12px" }}>
            <span className="span1">CONTACT</span>
          </h5>
        </div>
        <div className="nav9">
          <button
            className="btn btn-warning"
            style={{
              textAlign: "center",
              color: "white",
              marginTop: "5px",
              marginLeft: "50px",
            }}
          >
            BOOK A TABLE
          </button>
        </div>
      </div>
    </>
  );
}

// //backup
// // import { Link } from "react-router-dom"
// // import React from "react"
// // import "./Style.css"
// // export default function Header() {
// //   return (
// //     <>
// //            <div className="a1">
// //             <div className="nav1">
// //             <i className='fas fa-hamburger' style={{color:"orange",paddingLeft:"10px",fontSize:"50px"}}/><span style={{paddingLeft:"30px",fontSize:"30px"}}><b>Restoran</b></span>
// //             </div>
// //           <div className="nav2">

// //           </div>
// //           <div className="nav3">
// //           {/* <h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">HOME</span></h5> */}
// //           {/* <Link to='/Home'>Home</Link>  */}
// //           <Link to="/About" >About</Link>
// //           {/* <h5 style={{textAlign:"center",paddingTop: "12px"}}><Link className="span1" to="Home">HOME</Link></h5> */}
// //           </div>
// //           <div className="nav4">
// //           <h5 style={{textAlign:"center",paddingTop: "12px"}}><Link className="span1" to="/About">ABOUT</Link></h5>
// //           {/* <Link to="/About"><h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">ABOUT</span></h5></Link> */}
// //           </div>
// //           <div className="nav5">
// //           <h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">SERVICES</span></h5>
// //           {/* <Link to="/Services"><h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">SERVICES</span></h5></Link> */}
// //           </div>
// //           <div className="nav6">
// //            <h5 style={{textAlign:"center",paddingTop: "12px"}}><span className="span1">MENU</span></h5>
// //           </div>
// //           <div className="nav7">
// //            <h5 style={{textAlign:"center",paddingTop: "12px",}}><span className="span1">PAGES</span></h5>
// //           </div>
// //           <div className="nav8">
// //           {/* <Link to="/Contact"><h5 style={{textAlign:"center",paddingTop: "12px",}}><span className="span1">CONTACT</span></h5></Link> */}
// //           <h5 style={{textAlign:"center",paddingTop: "12px",}}><span className="span1">CONTACT</span></h5>
// //           </div>
// //          <div className="nav9">
// //          <button className="btn btn-warning" style={{textAlign:"center",color:"white",marginTop:"5px",marginLeft:"50px"}}>BOOK A TABLE</button>
// //         </div>
// //         </div>
// //     </>
// //   )
// // }

// import { Link } from "react-router-dom"
// import React from "react"
// // import "./Style.css"
// export default function Header() {
//   return (
//     <>

//            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
//   <div className="container-fluid">
//     <ul className="navbar-nav">
//       <li className="nav-item">
//        <Link className="nav-link" to="/Home">Home</Link>
//        <a href=''></a>
//       </li>
//       <li className="nav-item">
//       <Link className="nav-link" to="/About">About</Link>
//       </li>
//       <li className="nav-item">
//       <Link className="nav-link" to="/Contact">Contact</Link>
//       </li>
//     </ul>
//   </div>
// </nav>

//     </>
//   )
// }
