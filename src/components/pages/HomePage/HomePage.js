import { useState, useEffect } from 'react';
import WelcomeMessage from 'components/atoms/WelcomeMessage.js';
import MessagesForm from 'components/molecules/MessagesForm.js'
import MessagesList from 'components/molecules/MessagesList.js'
import MyHeader from 'components/molecules/MyHeader.js'
import Footer from "components/molecules/Footer.js"
import { addMessage,
         removeMessage,
         getMessages } from 'components/../helpers/http.js'

function HomePage(){
  const [authorInput, setAuthorInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [isAuthorInputError, setIsAuthorInputError] = useState(false)
  const [isMessageInputError, setIsMessageInputError] = useState(false)
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
    .then(data => {
      setMessages(data); 
    })
  }, []);

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
    addMessage(newMessage);

    const newMessages = messages.concat(newMessage);
    setMessages(newMessages);
    setAuthorInput('');
    setMessageInput('');
  }

  const handleRemove = (id) => {
    const messagesWithRemovedItem = messages.filter(message => {
      return message.id !== id
    })
    setMessages(messagesWithRemovedItem);
    removeMessage(id)
  }

  return (
    <div>
      <MyHeader h1Text = 'Logo'/> 

      <WelcomeMessage>
        Messages List
      </WelcomeMessage>
      
      <MessagesList
        messages = {messages}
        handleRemove = {handleRemove}
      />
      <Footer/>
    </div>
  );
}

export default HomePage;