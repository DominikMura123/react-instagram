import { URLS } from './urls.js'
import { ref, set, get, remove, onValue } from 'firebase/database';
import {database} from '../helpers/fireBase.js'

export const getMessagesFB = (callbackFn) => {
   //return fetch(`${URLS.messages}/messages`)
   // .then(res => res.json())

   return onValue(ref(database, `messages`), (snapshot)=>{
    const data = snapshot.toJSON();
    callbackFn(Object.values(data))
   })

}

export const getMessages = () => {
  return fetch(`${URLS.messages}/messages`)
   .then(res => res.json())
}

export const getMessageById = (id) => {
  return get(ref(database,`messages/${id}`))
/*  
    return fetch(`${URLS.messages}/message/${id}`)
      .then(res => res.json())
*/      
}

export const addMessage = (message) => {
  return set(ref(database, `messages/${message.id}`), message);
/*  
    return fetch(`${URLS.messages}/messages`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(message)
    })
*/    
}

export const removeMessage = (id) => {
  remove(ref(database, `messages/${id}`)) 
/*  
    return fetch(`${URLS.messages}/messages/${id}`, {
        method: 'DELETE'
    })
*/    
}  

export const editingMessage = (editedMessage) =>{
  return set(ref(database, `messages/${editedMessage.id}`), editedMessage)
/*  
  return fetch(`${URLS.messages}/message`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(editedMessage)
  })
*/  
}

export const addUser = (newUser) => {
  return fetch(`${URLS.messages}/user`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
}

export const getUserByEmail = (email) => {
  return fetch(`${URLS.messages}/user?email=${email}`)
    .then(res => res.json())
}
