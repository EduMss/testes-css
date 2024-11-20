import './login.css';
import React, { useState, useRef } from 'react';

const Login = () => {
    const [isVisiblePassword, setIsVisiblePassword] = useState(false);
    // const inputPasswordRef = useRef<HTMLInputElement | null>(null);
    const inputPasswordRef = useRef<HTMLInputElement | null>(null);

    return(
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.0/css/all.min.css" integrity="sha512-9xKTRVabjVeZmc+GUW8GgSmcREDunMM+Dt/GrzchfN8tkwHizc5RP4Ok/MXFFy5rIjJjzhndFScTceq5e6GvVQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
            </head>
            <div className='Login'>
                <form> 
                    <h1>Login</h1>
                    <div className='input-Box'>
                        <input type='text' required></input>
                        
                        <span className='icone'><i className="fa-solid fa-user"></i></span>
                        <label>
                            Usuário
                        </label>
                    </div>
                    <div className='input-Box'>
                        <input 
                            type={isVisiblePassword ? 'text' : 'password'} 
                            required 
                            ref={inputPasswordRef}
                            autoFocus
                        >
                             
                        </input>

                        <span className='icone'><i className="fa-solid fa-lock"></i></span>

                        <span 
                            className='icone-view' 
                            // onClick={() => setIsVisiblePassword(false)}  
                            onMouseUp={() => setIsVisiblePassword(false)}  // Restaura a senha como oculta ao soltar
                            onMouseLeave={() => setIsVisiblePassword(false)}  // Também esconde ao mover o mouse para fora
                          
                            onMouseDown={() => {
                            setIsVisiblePassword(true); 
                            if(inputPasswordRef.current) {
                                inputPasswordRef.current.focus();
                            }}}>
                                    
                            <i className={isVisiblePassword ? "fa-solid fa-eye-slash" : "fa-solid fa-eye"}></i>
                        </span>

                        <label>
                            Password
                        </label>
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type='checkbox'></input> Remember me
                        </label>
                        <a href='#'>Forgot Password?</a>
                    </div>
                    <button type='submit'>
                        <span className='icone'><i className="fa-solid fa-right-to-bracket"></i></span>
                    </button>
                    <div className='register-link'>
                        <p>
                            Don't have an account?
                            <a href='#'>Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;