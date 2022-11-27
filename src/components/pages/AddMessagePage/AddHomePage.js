import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import MainTemplate from 'components/templates/MainTemplate.js'
import MessagesForm from "components/section/MessagesForm.js";
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
     .then(() => navigate('/'));
  }

  return(
    <div>
      <MainTemplate>

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

      </MainTemplate>
    </div>
  )
}

export default AddMessagePage;