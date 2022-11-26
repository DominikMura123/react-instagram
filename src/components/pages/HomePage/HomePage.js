import { useState, useEffect } from 'react';
import WelcomeMessage from 'components/atoms/WelcomeMessage.js';
import MessagesList from 'components/molecules/MessagesList.js'
import MyHeader from 'components/molecules/MyHeader.js'
import Footer from "components/molecules/Footer.js"
import { removeMessage,
         getMessages } from 'components/../helpers/http.js'

function HomePage(){
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
    .then(data => {
      setMessages(data); 
    })
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