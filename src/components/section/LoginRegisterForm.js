import { useEffect, useState } from "react"
import { useNavigate, useLocation } from 'react-router-dom';

import { addUser, 
         getUserByEmail } from 'components/../helpers/http.js'
import MyInput from "components/atoms/MyInput.js"
import MyButton from "components/atoms/MyButton.js"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../helpers/fireBase.js'

function LoginRegisterForm(props){

    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    const [isEmailInputError, setIsEmailInputError] = useState(false);
    const [isPasswordInputError, setIsPasswordInputError] = useState(false);
    const [isLoginError, setIsLoginError] = useState(false);
    const [mode, setMode] = useState();

    const navigate = useNavigate();
    const location = useLocation().pathname;

    const handleEmailChange = (event) => {
        setEmailInput(event.target.value);
        setIsLoginError(false)
    }

    const handlePasswordChange = (event) => {
        setPasswordInput(event.target.value)
        setIsLoginError(false)
    }
    
    const handleSubmitRegister = (event) => {
        event.preventDefault();

        const isValid = emailInput.includes('@') &&
                        passwordInput.trim().length > 5;
      
        setIsEmailInputError(!emailInput.includes('@'));  
        setIsPasswordInputError(passwordInput.trim().length <= 5);  
      
        if(!isValid) {
            return;
        } 

        const newUser = {
            email: emailInput,
            password: passwordInput,
            name: '',
            avatar: ''
        }

        createUserWithEmailAndPassword(auth, emailInput, passwordInput)
            .then((user) => navigate('/'));
        //addUser(newUser)
        //    .then(() => navigate('/'));
    }   

    const handleSubmitLogin = (event) => {
        event.preventDefault();
      
        getUserByEmail(emailInput)
            .then(user => {
                if (user.password === passwordInput){
                    navigate('/')
                }
                else{
                    setIsLoginError(true)
                }
            })
            .catch(() => setIsLoginError(true));
    }

    const setHandelSubmit = (location) => {
        if(location === '/register'){
            return {
                handelSubmit: handleSubmitRegister, 
                ButtonText: 'Register'   
            }
        }
        else if (location === '/login'){
            return {
                handelSubmit: handleSubmitLogin, 
                ButtonText: 'Login'   
            }
        }
    }

    return(
        <div>  
            <form onSubmit={location === '/register' ? handleSubmitRegister : handleSubmitLogin}> 
            <label>
            email
            <MyInput
                value = {emailInput} 
                onChange = {handleEmailChange}
            />
            </label>
            { isEmailInputError
                ? <small>Pole email musi zawierać znak @ </small>
                : null
            }

            <label>
            password
            <MyInput
                type = "password" 
                value = {passwordInput} 
                onChange = {handlePasswordChange}
            />
            </label>
            { isPasswordInputError
                ? <small>Pole password musi zawierać przynajmnije 5 znaków</small>
                : null
            }

            <MyButton
                type = 'submit'
            >     
                {location === '/register' ? 'Register' : 'Login'} 
            </MyButton>  
            { isLoginError
                ? <small> NIE UDAŁO się zalogować</small>
                : null
            }            
            </form>
        </div>
    )
}

export default LoginRegisterForm