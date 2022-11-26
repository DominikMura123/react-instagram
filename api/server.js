import express from 'express';
import bodyParser from 'body-parser'
import cors from 'cors';

import { main, 
         getMessages, 
         saveMessages,
         removeMessage,
         getMessage,
         editMessage } from '../api/controllers/messages.js'

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', main);
app.get('/messages', getMessages);
app.get('/message/:id', getMessage);
app.post('/messages', saveMessages);
app.delete('/messages/:id', removeMessage);
app.put('/message', editMessage);

app.listen(3001, () => {
    console.log('server is running on port 3001')
})