import { getAll,
         getMessageById,
         save,
         remove,
         update } from '../models/messages.js'

export const main =(req, res) => {
    res.status(200).send('Szukajcie a znajdziecie');
}

export const getMessages = (req, res) => {
    getAll()
    .then(data =>{
        res.status(200).send(data.messages);
    }) 
}

export const getMessage = (req, res) => {
    getMessageById(req.params.id)
    .then(data =>{
        res.status(200).send(data);
    }) 
}

export const saveMessages = (req, res) => {
    return save(req.body)
        .then(() => {
        res.status(201).send('Created, OK!');
    })
}

export const removeMessage = (req, res) => {
    remove(req.params.id)
      .then(() => {
        res.status(200).send('OK!');
      })
}

export const editMessage = (req, res) => {
    if(!req.body.id) {
      return res.status(400).send('You need to provide ID');
    }
    update(req.body)
      .then(() => {
        res.status(200).send('OK!');
      })
} 