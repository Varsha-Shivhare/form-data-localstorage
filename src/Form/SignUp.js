import React, {useState} from 'react';
import './Form.css';


function SignUp({form, setForm, setPage}){

    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    const password = /^[a-zA-Z]{5,12}$/

    const [error, setError] = useState('')
    const msg = useState('')

    const checkEmail = (e) => {
        setForm({...form, email: e.target.value})
        if(regex.test(form.email) ===  false){
            setError('Invalid Email.')
        }
        else{
            setError('')
            return true;
        }
    }

    const checkPass = (e) => {
        setForm({...form, pass: e.target.value})
        if(password.test(form.pass) === false){
            setError('Password must contain atleast one capital & small letter character along with minimum 5 character.')
        }else{
            setError('')
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
           if(form.email !== '' && form.pass!==''){
            localStorage.setItem('Firstname', form.firstname)
            localStorage.setItem('Lastname', form.lastname)
            localStorage.setItem('Contact', form.contact)
            localStorage.setItem('Email', form.email);
            localStorage.setItem('Pass', form.pass);
            alert('Form Submitted!!!');
           setForm({email: '', pass: ''})  
           }else{
            setError('Fields can not be empty!!!')
           }

    }

    const handlePrev = (e) => {
        console.log('previous page')
        setPage(curr => curr - 1)
        e.preventDefault()
        
    } 
    
    return (
        <>
           <h3>Sign Up</h3>
            <div className="container">
                <div className="screen">
                    <div className="screen__content">
                        <form className="login">

                            <div className="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" 
                                className="login__input" 
                                placeholder="Email" 
                                value={form.email}
                                onChange={checkEmail} />
                            </div>

                            <div className="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="password" 
                                className="login__input" 
                                placeholder="Password"
                                value={form.pass}
                                onChange={checkPass}  />
                            </div>

                            <p style={{color: 'red'}}>{error}</p>

                            <div className='button_container'>
                            <button className="button next" onClick={handlePrev}>Prev</button>
                            <button className="button next" onClick={handleSubmit}>
                                Sign Up
                            </button>
                            <p style={{color: 'red'}}>{msg}</p>
                            </div>	
                            				
                        </form>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>		
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>		
                </div>
            </div>
            </>
        );
  }




export default SignUp;
