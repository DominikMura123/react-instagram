import {getAll,
        getUserByEmail, 
        save} from '../models/users.js'

export const getUsers = (req, res) => {
    return getAll()
    .then(data =>{
        res.status(200).send(data.users);
    }) 
}

export const saveUser = (req, res) => {
    return save(req.body)
        .then(() => {
        res.status(201).send('Created, OK!');
    })
}

export const getUser = (req, res) => {
    return getUserByEmail(req.query.email)
    .then((data) => {
        if (data){
            res.status(200).send(data);
        }
        else{
            res.status(404).send('Not found');
        }   
    }) 
} 