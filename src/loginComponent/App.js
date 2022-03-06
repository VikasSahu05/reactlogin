import { useState } from 'react';
import '../App.css';

function App() {

  const [inputData,setinputData] =useState({
    email:'',
    password:''
  });
  const datainput = (e)=>{
      console.log(e.target.value);
      const {value ,name} = e.target;

      setinputData({
        ...inputData,
        [name]:value
      });
  }

  // const store = localStorage.getItem('store');
  const formSubmit = (e)=>{
      e.preventDefault();
      let emailRegex = /^([_\-\.0-9a-zA-z]+)@([_\-\.0-9a-zA-z]+)\.([a-zA-Z]){2,5}$/;
      let passRegex = /^([!@#\$%\^&\*A-Za-z0-9\w]){8,15}$/;
      let errormsgemail = document.getElementById('errormsgemail');
      let errormsgpass = document.getElementById('errormsgpass');
    
      if(inputData.email === ""){
        errormsgemail.innerText = 'Must enter email address';
        errormsgemail.style.color = "red";
      }else if(emailRegex.test(inputData.email)){
        errormsgemail.innerText = '';
      }else{
        errormsgemail.innerText = 'Invalid email Address';
        errormsgemail.style.color = "red";
      }

      if(passRegex.test(inputData.password)){
        errormsgpass.innerText = '';
      }else{
        errormsgpass.innerText = 'password atleast 8 characters long include(alphanumeric & special)';
        errormsgpass.style.color="red";
      }

      console.log('data Submitted')
      setinputData({
        email:'',
        password:''
      });
  }

  return (
    <>
      <div className='container containerMargin bg-white'>
   <div className='row'>
      <div className='col-12 col-sm-6 col-md-6 p-5'>
         <h2 className='loginheading'>Login</h2>
         <form onSubmit={formSubmit}>
         <div className='mt-5'>
            <div className='formGroup d-flex flex-row'>
               <i className="fa fa-envelope" aria-hidden="true"></i>
               <input type="text" className='w-100 inputBox' id="email" placeholder='Enter your email' name="email" onInput={datainput} value={inputData.email}/>
            </div>
            <span id="errormsgemail"></span>
            <div className='formGroup d-flex flex-row'>
               <i className="fa fa-lock" aria-hidden="true"></i><input type="password" placeholder='Enter your password' id="password" className='w-100 inputBox' name="password" onInput={datainput} value={inputData.password}/>
            </div>
            <span id="errormsgpass"></span>

            <p className='mt-3 mb-5'><strong><a href="#" className="link TextColor">Forgot password?</a></strong></p>
            <button type='submit' className='LoginBtn btn btn-block w-100 text-white'>Login</button>
            <p className='text-center mt-3'><strong>Don't have an account? </strong><span className='TextColor'><strong><a href='#' className='link TextColor'>Signup now</a></strong></span></p>
         </div>
         </form>
      </div>
      <div className='col-12 col-sm-6 col-md-6 imageContainer'>
          <h1>Every new friend is a <br/>new adventure.</h1>
          <h6>let's get connected</h6>
      </div>
   </div>
</div>
    </>
  );
}

export default App;
