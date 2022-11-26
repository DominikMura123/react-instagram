import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MyHeader from "components/molecules/MyHeader.js";
import Footer from "components/molecules/Footer.js"
import MessagesForm from "components/molecules/MessagesForm.js";
import { addMessage } from 'components/../helpers/http.js'

function AddMessagePage(){
    const [authorInput, setAuthorInput] = useState('');
    const [messageInput, setMessageInput] = useState('');
    const [isAuthorInputError, setIsAuthorInputError] = useState(false)
    const [isMessageInputError, setIsMessageInputError] = useState(false)
    const navigate = useNavigate();

    const handleAuthorChange = (event) => {
        setAuthorInput(event.target.value);
    }
    
      const handleMessageChange = (event) => {
        setMessageInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const isValid = authorInput.trim().length > 0 &&
          messageInput.trim().length > 2;
    
        setIsAuthorInputError(authorInput.trim().length === 0);  
        setIsMessageInputError(messageInput.trim().length <= 2);  
    
        if(!isValid) {
          return;
        }   
    
        const randomId = Date.now().toString();
        const newMessage = {
          id: randomId,
          author: authorInput,
          message: messageInput
        }
   
        setAuthorInput('');
        setMessageInput('');
        addMessage(newMessage)
            .then(navigate('/'));
    }

    return(
        <div>
            <MyHeader h1Text = 'Logo'/>

            <MessagesForm
                handleSubmit = {handleSubmit}
                authorInput = {authorInput}
                handleAuthorChange = {handleAuthorChange}
                messageInput = {messageInput}
                handleMessageChange = {handleMessageChange}
                isAuthorInputError = {isAuthorInputError}
                setIsAuthorInputError = {setIsAuthorInputError}
                isMessageInputError = {isMessageInputError}
                setIsMessageInputError = {setIsMessageInputError}
            />

            <Footer/>
        </div>
    )
}

export default AddMessagePage;