import { URLS } from './urls.js'

export const getMessages = () => {
   return fetch(`${URLS.messages}/messages`)
    .then(res => res.json())
}

export const getMessageById = (id) => {
    return fetch(`${URLS.messages}/message/${id}`)
      .then(res => res.json())
}

export const addMessage = (message) => {
    return fetch(`${URLS.messages}/messages`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(message)
    })
}

export const removeMessage = (id) => {
    return fetch(`${URLS.messages}/messages/${id}`, {
        method: 'DELETE'
    })
}  

export const editingMessage = (editedMessage) =>{
  return fetch(`${URLS.messages}/message`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(editedMessage)
  })
}
