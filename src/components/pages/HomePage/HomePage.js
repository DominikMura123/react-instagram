import { useState, useEffect } from 'react';
import WelcomeMessage from 'components/atoms/WelcomeMessage.js';
import MessagesList from 'components/section/MessagesList.js'
import MainTemplate from 'components/templates/MainTemplate.js'
import { removeMessage,
         getMessages,
         getMessagesFB } from 'components/../helpers/http.js'

function HomePage(){
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessagesFB(setMessages)

  /*  getMessages()
    .then(data => {
      setMessages(data); 
    })
  */  
  }, []);

  const handleRemove = (id) => {
    const messagesWithRemovedItem = messages.filter(message => {
      return message.id !== id
    })
    setMessages(messagesWithRemovedItem);
    removeMessage(id)
  }

  return (
    <div>
      <MainTemplate>

      <WelcomeMessage>
        Messages List
      </WelcomeMessage>
      
      <MessagesList
        messages = {messages}
        handleRemove = {handleRemove}
      />
      </MainTemplate>
    </div>
  );
}

export default HomePage;