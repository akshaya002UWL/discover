import './general.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const GeneralDetails = () => {
     const [service, setService] = useState();

    useEffect(() => {
        fetch('https://recruitement-fsw-https-recruitment.cp4ba-mission-16bf47a9dc965a843455de9f2aef2035-0000.eu-de.containers.appdomain.cloud/common-assets')
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
    return <div class="container discover-container">
    <div class="row">
         <div class="col-lg-10 mx-auto mb-4">
            <div class="section-title text-center ">
                <h3 class="top-c-sep">Operation details </h3>
                {/* <p>Lorem ipsum dolor sit detudzdae amet, rcquisc adipiscing elit. Aenean socada commodo
                    ligaui egets dolor. Nullam quis ante tiam sit ame orci eget erovtiu faucid.</p>  */}
            </div>
        </div>
    </div>
    <section class="intro">
    <div class="bg-image h-100">
      <div class="mask d-flex align-items-center h-100 w-100" >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="card">
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-hover mb-0">
                      <thead>
                        <tr>
                          <th></th>
                          <th scope="col">Type</th>
                          <th scope="col">Name</th>
                          <th scope="col">Version</th>
                          <th scope="col">Subtype</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {(() => {
            let tr = [];
            {service?.common_assets.map(item => {
                tr.push(<tr>
                    <td>{item.type}</td>
                    <td>{item.name}</td>
                    <td>{item.version}</td>
                    <td>{item.sub_type}</td> 
                    <td>     <div class="job-right  flex-shrink-0">
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
                         class="btn d-block w-100 d-sm-inline-block btn-light remove-underline">Get Details</a>
                    </div></td>
                    </tr>);
            })} 
            return tr;
          })()}
                      
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  </section>
  </div>
  };
  
  export default GeneralDetails;
