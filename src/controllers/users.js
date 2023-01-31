
const { request } = require('express');
const database = require('../connection/database');

const insert = (data) => {
  const { NAME, BIRTH, EMAIL, CPF, REGISTER } = data;

  const user = {
    name: NAME,
    birth: BIRTH,
    email: EMAIL,
    cpf: CPF,
    register: REGISTER
  };

  user.birth = new Date(user.birth);

  return database('user_personal').insert(user).into('user_personal')
  .then(() => {
    console.log('Sucess!')
  })
  .catch((err) => {
    console.log(err)
  });
};

const get = () => {
  return database('user_personal').select('*').from('user_personal')
  .then((rows) => {
    return (rows);
  })
  .catch((err) => {
    console.log(err)
  });
};

const select = (id) => {
  return database('user_personal').select('*').from('user_personal')
    .where('id', id)
    .then((rows) => {
      return (rows);
    })
    .catch((err) => {
      console.log(err);
    });
};

const update = (id, data) => {
  const { NAME, BIRTH, EMAIL, CPF, REGISTER } = data;

  const updatedUser ={
    name: NAME,
    birth: BIRTH,
    email: EMAIL,
    cpf: CPF,
    register: REGISTER
  };

  return database('user_personal')
    .update(updatedUser)
    .where('id', id)
    .into('user_personal')
  .then(() => {
    console.log('Update sucess!')
  })
  .catch((err) => {
    console.log(err)
  });
};

const deleteRow = (id) => {
  return database('user_personal')
    .from('user_personal')
    .where('id', id)
    .del()
  .then(() => {
    console.log('Sucess removed!')
  })
  .catch((err) => {
    console.log(err)
  });
};

module.exports = {
  insert,
  get,
  select,
  update,
  deleteRow
};