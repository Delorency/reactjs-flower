import {GetAuthHeader} from '../utils/UsersUtils';

import axios from 'axios';


export default class Scrums {
  static async getAllScrumProjects(setter){
    const headers = Object.assign({'Content-Type': 'application/json',},GetAuthHeader())
    await axios.get(`${process.env.REACT_APP_SERVER}/scrum-projects/my/`,{
      headers: headers,
    }).then(response => {
      setter(response.data.results.slice(0,2));
    }).catch(error => {
      console.log(error);
    });
  }
}