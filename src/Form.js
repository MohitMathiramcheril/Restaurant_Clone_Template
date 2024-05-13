import { useState } from 'react';

export default function Form() {
    const[a,setname]=useState("");
    const[b,setemail]=useState("");
    const[c,setdate]=useState("");
    const[d,setpeo]=useState("");
    const[f,setreq]=useState("");




    const abc=(e)=>{
        e.preventDefault();
        document.getElementById("s").innerHTML=`Your Name is  ${a}`;
        document.getElementById("s1").innerHTML=`Your Email is  ${b}`;
        document.getElementById("s2").innerHTML=`Your Date & Time is  ${c}`;
        document.getElementById("s3").innerHTML=`No. Of People is  ${d}`;
        document.getElementById("s4").innerHTML=`Your Special Request is  ${f}`;
    }

  return (
    <>
       <div className='main1'>

       <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="row g-0">
                <div className="col-md-6 bg-dark text-white">
                   <h1 id='s'></h1><br/>
                   <h1 id='s1'></h1><br/>
                   <h1 id='s2'></h1><br/>
                   <h1 id='s3'></h1><br/>
                   <h1 id='s4'></h1>
                </div>
        







          <div className="col-md-6 bg-dark d-flex align-items-center">
            <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-warning fw-normal">Reservation---------</h5>
                <h1 className="text-white mb-4">Book A Table Online</h1>
                <form onSubmit={abc}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" onChange={(e)=>setname(e.target.value)}  className="form-control" placeholder="Your Name" />
                                <label>Your Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="email" onChange={(e)=>setemail(e.target.value)}  className="form-control" placeholder="Your Email" />
                                <label>Your Email</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                <input type="date" onChange={(e)=>setdate(e.target.value)} className="form-control datetimepicker-input"  placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                <label>Date & Time</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <select className="form-select" onChange={(e)=>setpeo(e.target.value)} >
                                  <option value="1">People 1</option>
                                  <option value="2">People 2</option>
                                  <option value="3">People 3</option>
                                </select>
                                <label>No Of People</label>
                              </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control" onChange={(e)=>setreq(e.target.value)} placeholder="Special Request"  style={{height: "100px"}}></textarea>
                                <label>Special Request</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-warning w-100 py-3" type="submit">Book Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </div>
                  
            
       
       
  







</div>
    </>
  )
}
