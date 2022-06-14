import './Login.css';
import {Link,useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {emailValidation,passwordValidation}  from '../Validations';

function Login(){

  const navigate = useNavigate();

  const[getForm,setForm]=useState({
    email:'',
    password:''
  });

  const[getValidation,setValidation]=useState({
    email:'',
    password:''
  });

  const onChangeHandler=(event)=>{
    setForm({
      ...getForm,[event.target.name]:event.target.value
    })
  }


  const onSubmitHandler=(event)=>{
    event.preventDefault(); 
    setValidation({
      ...getValidation,email:!emailValidation(getForm.email)?"Enter Your EmailId":'',
      password:!passwordValidation(getForm.password)?"Enter Your password":''
    });
    if(emailValidation(getForm.email) && passwordValidation(getForm.password)){
      alert("success");
      let email = sessionStorage.getItem('email');
      let password = sessionStorage.getItem('password');
      if(email === getForm.email && password === getForm.password){
        navigate('/dashboard');
      }
      else{
        setValidation({
          email:'Invalid email',
          password:'Invalid password'
        });
      }
  
    }
}
 return (<div>
                   <div className="container bgimg">            
              <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4 logform">
                      <div className="row">
                         
                            <div className="col-4">                          
                                  <h1>LIBRARY</h1>
                                  <h6>MANAGEMENTSYSTEM</h6>
                          </div>    
                       </div>                    
                    <form className="form-inline" style={{textAlign:"center"}}>
                        <div className="form-group row">
                                    <label style={{width: "150px"}} >Email Id</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                      <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-user" aria-hidden="true"></i></span>
                                </div>
                                    <input type="email"        onChange={onChangeHandler} value={getForm.email}     id="email" name="email"  className="form-control"   placeholder="UserName" required style={{width: "170px"}}/>
                                    {getValidation.email && <div class="alert alert-danger" role="alert">
                        {getValidation.email}
</div> }
                               
                            </div>
                      </div>
                      <div className="form-group row" style={{marginTop: "20"}}>
                        <label style={{width: "150px"}}>Password</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend"><i className="fa fa-key" aria-hidden="true"></i></span>
                        </div>                          
                        <input type="password"      onChange={onChangeHandler} value={getForm.password} name="password" className="form-control"  placeholder="Password"   id="password" style={{width: "170px"}}/>
                        
                        {getValidation.password && <div class="alert alert-danger" role="alert">
                        {getValidation.password}
</div>} 
                        </div>                  
                    
                      </div>                      
                      
                      <div className="form-group row">
                        <div className="col-sm-10" style={{paddingLeft: "150",marginTop: "50"}}>
                          <button type="submit" onClick={onSubmitHandler} className="btn btn-warning logbutton">Login</button>
                        </div>
                      </div>
                    </form>
              
                      <div className="col-4">                    
                    </div>
            </div>     
        </div>
    </div>
    </div>
    )
}

export default Login;