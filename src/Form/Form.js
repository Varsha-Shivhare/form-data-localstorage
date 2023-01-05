import React, { useState } from 'react';
import './Form.css';
import SignUp from './SignUp';

function Form(){
    const num = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
    const text = /^.{2,12}$/

    const [page, setPage] = useState(0)
    const [error, setError] = useState('')
    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        contact: '',
        email: '',
        password: ''
    })
    const msg = useState('')
    
    const checkFirstname  = (e) => {
        setForm({...form, firstname: e.target.value})
        if(text.test(form.firstname) === false){
            setError('Invalid Firstname.')
        }else{
            setError('')
            return true;
        }
    }

    const checkLastname = (e) => {
        setForm({...form, lastname: e.target.value})
        if(text.test(form.lastname) === false){
            setError('Invalid Lastname.')
        }else{
            setError('')
            return true;
        }
    }

    const checkContact  = (e) => {
        setForm({...form, contact: e.target.value})
        if(num.test(form.contact) === false){
            setError('Invalid Contact number.')
        }else{
            setError('')
            return true;
        }
    }


    const handleNextButton = (e) => { 
        e.preventDefault()
       if(form.firstname !== '' && form.lastname !== '' && form.contact !== ''){
        setPage(curr => curr + 1)
       }else{
        setError('Fields can not be empty!!!')
       }
    
    }

    return (
            <>
            { page === 0 ?   
            <div>
            <h3>Form</h3>
                <div className="container"> 
                <div className="screen">
                    <div className="screen__content">
                        <form className="login" type='submit'>
                            <div className="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" 
                                className="login__input" 
                                placeholder="Firstname" 
                                value={form.firstname} 
                                onChange={checkFirstname} />
                            </div>

                            <div className="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input type="text" 
                                className="login__input" 
                                placeholder="Lastname"
                                value={form.lastname}
                                onChange={checkLastname} />
                            </div>

                            <div className="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input type="number" 
                                className="login__input" 
                                placeholder="Contact number" 
                                value={form.contact}
                                onChange={checkContact} />
                            </div>
                            
                            <p style={{color: 'red'}}>{error}</p>

                            <button className="button next" 
                            onClick={handleNextButton}>
                                <span className="button__text">Next</span>
                            </button> 

                            <p style={{color: 'red'}}>{msg}</p>
                            				
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
                </div> : <SignUp form={form} setForm={setForm} setPage={setPage} />}
                        
            </>
        );
  }




export default Form;
