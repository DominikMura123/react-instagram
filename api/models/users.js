import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

const fsp = fs.promises;
const JSON_PATH = 'api/db/users.json'

const getJSONFile = (fileName) => {
  return fsp.readFile(fileName, 'utf8')
    .then(data => JSON.parse(data));
}

const saveToJSONFile = (fileName, objectToSave) => {
    return fsp.writeFile(fileName, JSON.stringify(objectToSave), 'utf8');
}

export const getAll = () => {
  return getJSONFile(JSON_PATH);
}

export const save = (objectToSave) => {
    return getJSONFile(JSON_PATH)
    .then(data => {
      objectToSave.id = uuidv4();
      data.users.push(objectToSave);
      return saveToJSONFile(JSON_PATH, data)
    })
}

export const getUserByEmail = (email) => {
  return getJSONFile(JSON_PATH)
  .then(data => {
    return data.users
      .find(user => user.email === email)
  })
}