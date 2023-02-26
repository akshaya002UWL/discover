import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';



const Connection = () => {

  const navigate = useNavigate();


  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [inputConn, setinputConn] = useState('')
  const [showConnection, setShowConnection] = useState(0)





  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/common-assets",  
      { state: {
        username:username, 
        password: password,
        connString:inputConn
      }
    });


  }
  const goToNext = (event) => {
    setShowConnection(event.target.value)
  }
    return <div class="container-fluid px-1  mx-auto hd-top">
    <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3>Discover</h3>
            <p class="blue-text">Enter the connection details</p>

            {(() => {
              if (showConnection == 0){
                  return (
                    <Form.Select aria-label="Default select example" size="lg" onChange={goToNext}>
                    <option value="0">Select the variance of discover</option>
                    <option value="ibm_automation">IBM Automation – BAW, ODM, RPA</option>
                    <option value="third_party">3rd Party Automation – RPA</option>
                    <option value="open_api">OpenAPI based Patterns </option>
                  </Form.Select>
                  )
              }
              
              return null;
            })()}

    {(() => {
              if (showConnection != 0){
                  return (
                    <div class="card">
                    {/* <!-- <h5 class="text-center mb-4">Powering world-class companies</h5> --> */}
                    <form class="form-card" onSubmit={handleSubmit}>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex">
                              <label class="form-control-label px-3">Username<span class="text-danger"> *</span></label> 
                             <input type="text" id="inputEmail"  name="username"  value={username} onChange={(e) => setUsername(e.target.value)} class="form-control" placeholder="Enter your username" required autoFocus />
                            </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Password<span class="text-danger"> *</span></label>
                             <input type="password" id="inputPassword"  value={password} onChange={(e) => setPassword(e.target.value)} name="password" class="form-control" placeholder="Enter your password" required />
    
                            </div>
                        </div>
                        
                       
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label px-3">Connection URL<span class="text-danger"> *</span></label>
                              <input type="text" id="inputConn" value={inputConn} onChange={(e) => setinputConn(e.target.value)}  class="form-control"  name="conn_string" placeholder="Enter connection url" required />
    
                              </div>
                        </div>
                        <div class="row justify-content-end">
                            <div class="form-group col-sm-6"> <button type="submit"  class="btn-blockbtn btn-outline-danger">Get the details</button> </div>
                        </div> 
                    </form>
                </div>
                  )
              }
              
              return null;
            })()}

        </div>
    </div>
</div>
  };
  
  export default Connection;
