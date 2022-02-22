import axios from "axios";
import {baseUrl} from './Constants/constant'

const instance = axios.create({
    baseURL: baseUrl,
    
  });


  export default instance