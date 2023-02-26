import './general.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const GeneralDetails = () => {
     const [service, setService] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8080/test')
           .then((response) => response.json())
           .then((data) => {
            console.log(typeof data);
            setService(data)
             
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    const navigate = useNavigate();

    const {state} = useLocation();
    const { username, password,connString } = state;
    return <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" />

<div class="container discover-container">
            <div class="row">
                 <div class="col-lg-10 mx-auto mb-4">
                    <div class="section-title text-center ">
                        <h3 class="top-c-sep">Exposed Automation Service details </h3>
                        {/* <p>Lorem ipsum dolor sit detudzdae amet, rcquisc adipiscing elit. Aenean socada commodo
                            ligaui egets dolor. Nullam quis ante tiam sit ame orci eget erovtiu faucid.</p>  */}
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="career-search mb-60">

                       

                        <div class="filter-result">
                            <p class="mb-30 ff-montserrat">Total  : {service?.count} </p>
                            

                            {(() => {
            let div = [];
            {service?.common_assets.map(item => {
                div.push(
                    <div  class="job-box d-md-flex align-items-center justify-content-between mb-30">
                    <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                       
                        <div class="job-content" >
                           
                          <h5 class="mr-md-4">{item.name}</h5>
                          <p>{item.sub_type}</p>
                        </div>
                        
                    </div>
                    <div class="job-right my-4 flex-shrink-0">
                        <a 
                            onClick={()=>{
                            navigate("/operational-details",  
                            { state: {
                                username:username, 
                                password: password,
                                connString:connString
                            }
                            })
                        }}
                         class="btn d-block w-100 d-sm-inline-block btn-light">Get Details</a>
                    </div>
                </div>
                  );
            })} 
            return div;
          })()}
                        
                            

                           

                        </div>
                    </div>

                  
                </div>
            </div>

        </div>

    </div>
  };
  
  export default GeneralDetails;