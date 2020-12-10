// axios config file for unsplash
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID cH2wb2VYNWHoumy_Xij0Bmq2zUpF-PwWcBDP13XSEXA'
  }
});