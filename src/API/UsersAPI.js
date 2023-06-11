import {SetUserToken} from '../utils/UsersUtils';

import axios from 'axios';


export default class Users {
  static async LoginUser(email, password, setResult, setOpen) {
    const headers = {'Content-Type': 'application/json'}
    await axios.post(`${process.env.REACT_APP_SERVER}/token/login/`,
    {
      email,
      password
    },
    {
        headers: headers,
    }).then(response => {
      SetUserToken(response.data.auth_token);
    }).catch(error => {
      if (error.response) {
        setResult('Invalid email or password');
      } else {setResult('Server error');}
      setOpen(true);
      console.log(error);
    })
  };
  static async RegistrationUser(email, username, last_name, first_name, password, setResult, setOpen, setSuccess) {
    const headers = {'Content-Type': 'application/json'}
    await axios.post(`${process.env.REACT_APP_SERVER}/users/`,
    {
      email,
      username,
      last_name,
      first_name,
      password
    },
    {
        headers: headers,
    }).then(response => {
      setResult('Account has been created')
      setOpen(true);
      setSuccess(true);
    }).catch(error => {
      if (error.response) {
        const errors = {
          'username':'Username',
          'email':'Email',
          'last_name':'Surname',
          'first_name':'Name',
          'password':'Password',
        }
        const key = Object.keys(error.response.data)[0];
        setResult(errors[key]+': '+ error.response.data[key][0]);
      } else {setResult('Server error')}
      setOpen(true);
      setSuccess(false);
      console.log(error);
    })
  }
}