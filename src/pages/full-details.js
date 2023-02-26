import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FullDetails = () => {
  const [data, setData] = useState();

    useEffect(() => {
        fetch('http://127.0.0.1:8080/test1')
           .then((response) => response.json())
           .then((data) => {
            setData(data)
             
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);
  const [lgShow, setLgShow] = useState(false);
  const [url, setUrl] = useState("");
  const {state} = useLocation();
  const { username, password,connString } = state;
  const openModal = (item) => {
    setUrl(connString+item.origin.snapshot.project_name+'/'+item.name+'docs?openAPIVersion=3')
    setLgShow(true)


  }

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
                          <th scope="col">Parameter name</th>
                          <th scope="col">Parameter type</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                      {(() => {
                                
                                let tr = [];
                                {data?.common_assets.map(item => {
                                  item.operations.map(op => {                                  
                                    tr.push(<tr>
                                    <td>{op.op_name}</td>
                                    <td>{op.op_parms[0].parm_name}</td> 
                                    <td>{op.op_parms[0].parm_type}</td>
                                    <td><a  href={connString+item.origin.snapshot.project_name+'/'+item.name+'docs?openAPIVersion=3'} target="_blank">{url}Generate OpenAPI</a></td> 
                                      </tr>
                                      );
                                    })
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
      <Modal
        size="lg"
        props={data}
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          OpenAPI definition URL!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> {url}  <button onClick={async () => {
  if ("clipboard" in navigator) {
    await navigator.clipboard.writeText(url);
  } else {
    document.execCommand("copy", true, url);
  }
}}>Copy</button> 
</Modal.Body>
<Modal.Footer></Modal.Footer>
      </Modal>
  </section>
  </div>
  };
  
  export default FullDetails;