import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {getMessageById,
        editingMessage} from 'components/../helpers/http.js'
import MainTemplate from 'components/templates/MainTemplate.js'
import MessagesForm from "components/section/MessagesForm.js"
import WelcomeMessage from 'components/atoms/WelcomeMessage.js'

function EditPage(){
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isAuthorInputError, setIsAuthorInputError] = useState(false)
  const [isMessageInputError, setIsMessageInputError] = useState(false)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(()=>{
    getMessageById(params.id)
      .then(data => {
        setAuthorInput(data.author);
        setMessageInput(data.message);
      })
  }, [params.id])

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
    
    const editMessage = {
      id: params.id,
      author: authorInput,
      message: messageInput
    }

    editingMessage(editMessage)
    setAuthorInput('');
    setMessageInput('')
      .then(() => navigate('/'));
  }

  return(
    <div>
      <MainTemplate>

      <WelcomeMessage>Add new post</WelcomeMessage>

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

export default EditPage